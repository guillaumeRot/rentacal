import { z } from "zod";

export const AuthSchema = z.object({
  email: z.string(),
  name: z.string(),
  password: z.string(),
});
export type AuthType = z.infer<typeof AuthSchema>;
