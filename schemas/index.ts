import * as z from 'zod';

export const LoginSchema = z.object({
  email: z.string().email({
    message: 'Email is required',
  }),
  password: z.string().min(1, { message: 'Password is required' }),
});

export const ResetPasswordSchema = z.object({
  email: z.string().email({
    message: 'Email is required',
  }),
});

export const RegisterSchema = z.object({
  email: z.string().email({
    message: 'Email is required',
  }),
  password: z.string().min(6, { message: 'Minimum 6 Characters required' }),

  name: z.string().min(1, { message: 'Name is required' }),
});

//Dashboard Schemas

export const AdminSchema = z.object({
  id: z.string().min(8).max(8),
  username: z.string().min(8).max(12),
  phoneNumber: z.string(),
  emailId: z.string().email(),
  role: z.enum(['admin', 'user', 'guest']),
  activeStatus: z.boolean(),
});
