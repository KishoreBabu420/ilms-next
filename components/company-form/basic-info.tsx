'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { CompanySchema } from '@/schemas';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import SectionHeading from './section-heading';

export const BasicInfo = () => {
  const form = useForm<z.infer<typeof CompanySchema>>({
    resolver: zodResolver(CompanySchema),
    defaultValues: {
      companyName: '',
      companyAdminName: '',
      companyAdminEmail: '',
      companyAdminPhone: '',
      companyAddress: '',
      lmsName: '',
      companyLogo: '',
      companyPrimaryColor: '',
      companySecondaryColor: '',
      companyDbName: '',
      companyDbPassword: '',
      languageId: '',
      companyId: '',
      startDate: new Date(),
      endDate: new Date(),
    },
  });

  function onSubmit(values: z.infer<typeof CompanySchema>) {
    console.log(values);
  }

  return (
    <>
      <SectionHeading
        title='Company Details'
        desc='Enter the basic Company Details'
      />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-8 flex flex-col'
        >
          <div className='grid grid-cols-3 gap-2 justify-between items-center'>
            <FormField
              control={form.control}
              name='companyName'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Comapany Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='Add Company'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='companyAdminName'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company Admin</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='Add Admin '
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='companyAdminEmail'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input
                      type='email'
                      placeholder='johndoe@gmail.com'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className='grid grid-cols-3 gap-2 justify-between items-center'>
            <FormField
              control={form.control}
              name='companyAdminPhone'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='+91 000 000 0000 '
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='lmsName'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>LMS Name</FormLabel>
                  <FormControl>
                    <Input
                      type='text'
                      placeholder='Lms Name'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='companyAddress'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder='Address'
                      className='resize-none'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className='grid grid-cols-3 gap-2 justify-between items-center'>
            <FormField
              control={form.control}
              name='companyLogo'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Logo Url</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='https://image.com'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='companyPrimaryColor'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company Primary Color</FormLabel>
                  <FormControl>
                    <Input
                      type='text'
                      placeholder='Company Primary Color'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='companySecondaryColor'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company Secondary Color</FormLabel>
                  <FormControl>
                    <Input
                      type='text'
                      placeholder='Company Secondary Color'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className='grid grid-cols-3 gap-2 justify-between items-center'>
            <FormField
              control={form.control}
              name='companyDbName'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Database Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='Database Name'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='companyDbPassword'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Database Password</FormLabel>
                  <FormControl>
                    <Input
                      type='password'
                      placeholder='Database Password'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='languageId'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Language Id</FormLabel>
                  <FormControl>
                    <Input
                      type='text'
                      placeholder='Language Id'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className='grid grid-cols-3 gap-2 justify-between items-center'>
            <FormField
              control={form.control}
              name='companyId'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company Id</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='Company Id'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='startDate'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Database Password</FormLabel>
                  <FormControl>
                    <Input
                      type='date'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='endDate'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>End Date</FormLabel>
                  <FormControl>
                    <Input
                      type='date'
                      placeholder='End Date'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </form>
      </Form>
    </>
  );
};
