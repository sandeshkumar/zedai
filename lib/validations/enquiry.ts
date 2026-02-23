import { z } from "zod";

export const SERVICE_OPTIONS = [
  "Business Website",
  "E-Commerce Store",
  "Mobile App",
  "Website Redesign",
  "SEO & Marketing",
  "Custom Software",
] as const;

export const enquirySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  phone: z
    .string()
    .min(10, "Enter a valid phone number")
    .max(15)
    .regex(/^[+]?[\d\s-]+$/, "Enter a valid phone number"),
  serviceType: z.enum(SERVICE_OPTIONS, {
    message: "Please select a service",
  }),
  budget: z.string().max(100),
});

export type EnquiryFormData = z.infer<typeof enquirySchema>;
