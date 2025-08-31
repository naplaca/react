import { z } from "zod";

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const emptyStringToUndefined = z.literal("").transform(() => undefined);

export function asOptionalField<T extends z.ZodType>(schema: T) {
  return schema.optional().or(emptyStringToUndefined);
}
