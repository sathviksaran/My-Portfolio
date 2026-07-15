import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters.")
    .max(100, "Name cannot exceed 100 characters."),

  email: z
    .string()
    .trim()
    .email("Please enter a valid email address."),

  phone: z
    .string()
    .trim()
    .optional()
    .refine(
      (value) =>
        !value ||
        /^(\+?\d{1,4}[- ]?)?\d{10}$/.test(
          value.replace(/\s/g, "")
        ),
      {
        message: "Please enter a valid phone number.",
      }
    ),

  subject: z
    .string()
    .trim()
    .min(5, "Subject must be at least 5 characters.")
    .max(150, "Subject cannot exceed 150 characters."),

  message: z
    .string()
    .trim()
    .min(20, "Message must be at least 20 characters.")
    .max(1000, "Message cannot exceed 1000 characters."),
});

export type ContactFormData = z.infer<typeof contactSchema>;