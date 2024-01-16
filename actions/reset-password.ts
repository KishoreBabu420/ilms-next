'use server';
import * as z from 'zod';

import { ResetPasswordSchema } from '@/schemas';
export const login = async (values: z.infer<typeof ResetPasswordSchema>) => {
  const validatedFields = ResetPasswordSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'Invalid fields!' };
  }

  return { success: 'Email sent!' };
};
