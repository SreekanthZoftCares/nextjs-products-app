import { z } from "zod";

export const loginSchema = z.object({
  email: z.email("Enter a valid email"),
  // .refine((val) => val === "sreekanth@gmail.com", "Email doesn't exist"),
  password: z.string().min(1, "Password is required"),
  // .min(8, "Password must be at least 8 characters"),
  // .refine((val) => val === "123123123", "Invalid password"),
});

export type LoginFormValues = z.infer<typeof loginSchema>;
