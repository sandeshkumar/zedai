import { z } from "zod";

export const SERVICE_OPTIONS = [
  "Custom Website",
  "eCommerce Solution",
  "Mobile App",
  "ERP System",
  "CRM Software",
  "Hospitality & POS",
  "AI Solution",
  "Digital Marketing",
  "UI/UX Design",
  "Cloud & DevOps",
  "Maintenance & AMC",
  "Cybersecurity",
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
