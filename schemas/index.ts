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
  id: z.string(),
  username: z.string(),
  phoneNumber: z.string(),
  emailId: z.string().email(),
  role: z.enum(['admin', 'user', 'guest']),
  activeStatus: z.boolean(),
});

export const CompanySchema = z.object({
  companyName: z.string(),
  companyAdminName: z.string(),
  companyAdminEmail: z.string().email(),
  companyAdminPhone: z.string(),
  companyAddress: z.string(),
  lmsName: z.string(),
  companyLogo: z.string(),
  companyPrimaryColor: z.string(),
  companySecondaryColor: z.string(),
  companyDbName: z.string(),
  companyDbPassword: z.string(),
  languageId: z.string(),
  companyId: z.string(),
  startDate: z.string(),
  endDate: z.string(),
});

export const mainModuleSchema = z.object({
  moduleName: z.string(),
  printSequence: z.string(),
  activeStatus: z.boolean(),
});

export const subModuleSchema = z.object({
  moduleId: z.string(),
  subModuleName: z.string(),
  printSequence: z.string(),
  activeStatus: z.boolean(),
});

export const countrySchema = z.object({
  countryName: z.string(),
  activeStatus: z.boolean(),
});

export const stateSchema = z.object({
  countryId: z.string(),
  stateName: z.string(),
  printSequence: z.string(),
  activeStatus: z.boolean(),
});

export const languageSchema = z.object({
  languageName: z.string(),
  languageCode: z.string(),
  Description: z.string(),
  activeStatus: z.boolean(),
});
