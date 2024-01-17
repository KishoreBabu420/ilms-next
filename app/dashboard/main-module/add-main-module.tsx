'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { mainModuleSchema } from '@/schemas';

import { useId } from 'react';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';

export const AddAdmin = () => {
  const form = useForm<z.infer<typeof mainModuleSchema>>({
    resolver: zodResolver(mainModuleSchema),
    defaultValues: {
      moduleName: '',
      printSequence: '',
      activeStatus: true,
    },
  });

  function onSubmit(values: z.infer<typeof mainModuleSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='space-y-8'
      >
        <FormField
          control={form.control}
          name='moduleName'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Module Name</FormLabel>
              <FormControl>
                <Input
                  placeholder='Add module'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='printSequence'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Print Sequence</FormLabel>
              <FormControl>
                <Input
                  placeholder='Add Print Sequence'
                  {...field}
                  type='phone'
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='activeStatus'
          render={({ field }) => (
            <FormItem className='flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4'>
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className='space-y-1 leading-none'>
                <FormLabel>Update the user Active Status</FormLabel>
              </div>
            </FormItem>
          )}
        />
        <Button type='submit'>Submit</Button>
      </form>
    </Form>
  );
};
