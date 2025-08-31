import { z, type ZodType } from "zod";
import { PaginationMetadata } from "./schema";

export function PaginatedResponse<T extends ZodType>(resource: T) {
  return z.object({
    meta: PaginationMetadata,
    data: resource.array(),
  });
}
