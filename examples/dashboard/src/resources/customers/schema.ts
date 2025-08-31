import { dateSchema } from "@naplaca/react-core/utilities/date";
import { phoneNumberSchema } from "@naplaca/react-core/utilities/phone-number";
import { z } from "zod";

export const Customer = z.object({
  id: z.uuid(),
  name: z.string(),
  displayName: z.string(),
  email: z.email(),
  avatar: z.url().nullable(),
  phoneNumber: phoneNumberSchema,
  createdAt: dateSchema,
  updatedAt: dateSchema,
});

export type Customer = z.infer<typeof Customer>;

export const CreateCustomerRequest = z.object({
  name: z.string().min(2).max(100),
  email: z.email(),
  phoneNumber: phoneNumberSchema,
});

export type CreateCustomerRequest = z.infer<typeof CreateCustomerRequest>;

export const UpdateCustomerRequest = CreateCustomerRequest.pick({ name: true }).partial();

export type UpdateCustomerRequest = z.infer<typeof UpdateCustomerRequest>;
