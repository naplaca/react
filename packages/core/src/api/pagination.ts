import { z, type ZodObject, type ZodType } from "zod";
import { asOptionalField } from "../utilities/text";

export const PaginationMetadata = z.object({
  total: z.number().int().min(0),
  perPage: z.number().int().positive(),
  currentPage: z.number().int().positive().nullable(),
  lastPage: z.number().int().positive(),
  firstPage: z.number().int().positive(),
  firstPageUrl: z.string(),
  lastPageUrl: z.string(),
  nextPageUrl: z.string().nullable(),
  previousPageUrl: z.string().nullable(),
});

export type PaginationMetadata = z.infer<typeof PaginationMetadata>;

export function PaginatedResponse<T extends ZodType>(resource: T) {
  return z.object({
    meta: PaginationMetadata,
    data: resource.array(),
  });
}

export function PaginatedRequest<T extends ZodObject>(schema?: T) {
  const base = z
    .object({
      page: z.number().min(1),
      perPage: z.number().min(1),
      sort: asOptionalField(z.string()),
      include: asOptionalField(z.string()),
    })
    .partial();

  return schema ? base.extend(schema) : base;
}
