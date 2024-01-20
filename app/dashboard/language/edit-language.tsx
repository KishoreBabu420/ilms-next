'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { languageSchema } from '@/schemas';

import { useId } from 'react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';

interface EditLanguageProps {
  languageId: string;
  languageName: string;
}

export const EditLanguage = ({
  languageId,
  languageName,
}: EditLanguageProps) => {
  const form = useForm<z.infer<typeof languageSchema>>({
    resolver: zodResolver(languageSchema),
    defaultValues: {
      id: useId(),
      languageName: '',
      activeStatus: true,
    },
  });

  function onSubmit(values: z.infer<typeof languageSchema>) {
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
          name='languageName'
          render={({ field }) => (
            <FormItem>
              <FormLabel>State Name</FormLabel>
              <FormControl>
                <Input
                  placeholder='Add State'
                  {...field}
                  value={languageName}
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
                <FormLabel>Update the state Active Status</FormLabel>
              </div>
            </FormItem>
          )}
        />
        <Button type='submit'>Submit</Button>
      </form>
    </Form>
  );
};
