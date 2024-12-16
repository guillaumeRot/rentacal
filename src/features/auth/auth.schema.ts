import { z } from "zod";

export const SignupSchema = z.object({
  email: z.string(),
  name: z.string(),
  password: z.string(),
});
export type SignupType = z.infer<typeof SignupSchema>;

export const SigninSchema = z.object({
  email: z.string(),
  password: z.string(),
});
export type SigninType = z.infer<typeof SigninSchema>;
