import { z } from "zod";

export const User = z.object({
  name: z.string(),
  email: z.email(),
});

export type User = z.infer<typeof User>;

export const RegisterRequest = z
  .object({
    name: z.string(),
    email: z.email(),
    password: z.string(),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

export type RegisterRequest = z.infer<typeof RegisterRequest>;

export const LoginRequest = z.object({
  email: z.email(),
  password: z.string(),
  remember: z.boolean().optional(),
});

export type LoginRequest = z.infer<typeof LoginRequest>;

export const ForgotPasswordRequest = z.object({
  email: z.email(),
});

export type ForgotPasswordRequest = z.infer<typeof ForgotPasswordRequest>;
