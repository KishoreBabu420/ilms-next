'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { attributeSchema } from '@/schemas';

import { useToast } from '@/components/ui/use-toast';
import { Toaster } from '@/components/ui/toaster';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
interface EditAttributeProps {
  attributeId: string;
  attributeName: string;
}

export const EditAttribute = ({
  attributeId,
  attributeName,
}: EditAttributeProps) => {
  const form = useForm<z.infer<typeof attributeSchema>>({
    resolver: zodResolver(attributeSchema),
    defaultValues: {
      attributeId: attributeId,
      attributeName: attributeName,
    },
  });

  const router = useRouter();
  const { toast } = useToast();

  function onSubmit(values: z.infer<typeof attributeSchema>) {
    console.log(values);

    router.push('/dashboard/attributes');

    toast({
      className: cn(' absolute bottom-0 right-0'),
      title: 'SuccessFully Updated',
    });
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-8'
        >
          <FormField
            control={form.control}
            name='attributeName'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Attribute Name: {attributeName}</FormLabel>
                <FormControl>
                  <Input
                    placeholder='Add Attribute'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Table>
            <TableCaption>A list of your translated values.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className='w-[100px]'>#</TableHead>
                <TableHead>Language</TableHead>
                <TableHead className='text-right'>Translated Value</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className='font-medium'>1</TableCell>
                <TableCell>Tamil</TableCell>
                <TableCell className='text-right'>{attributeName}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className='font-medium'>2</TableCell>
                <TableCell>Telugu</TableCell>
                <TableCell className='text-right'>{attributeName}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>3</TableCell>
                <TableCell>Malayalam</TableCell>
                <TableCell className='text-right'>{attributeName}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>4</TableCell>
                <TableCell>Hindi</TableCell>
                <TableCell className='text-right'>{attributeName}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Button
            type='submit'
            className='block w-full'
          >
            Edit
          </Button>
        </form>
      </Form>
      <Toaster />
    </>
  );
};
