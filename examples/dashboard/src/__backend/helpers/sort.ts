import type { DefaultBodyType, StrictRequest } from "msw";

export function sort<D, R extends DefaultBodyType>(
  request: StrictRequest<R>,
  data: D[],
  fields: { name: keyof D; type: "string" | "number" | "date" }[]
) {
  const url = new URL(request.url);
  const orderBy = url.searchParams.get("orderBy") as keyof D | null;
  const order = url.searchParams.get("order") === "desc" ? "desc" : "asc";

  if (!orderBy) {
    return data;
  }

  const field = fields.find((f) => f.name === orderBy);

  if (!field) {
    return data;
  }

  return [...data].sort((a, b) => {
    const valueA = a[orderBy];
    const valueB = b[orderBy];

    switch (field.type) {
      case "string":
        return order === "asc"
          ? String(valueA).localeCompare(String(valueB))
          : String(valueB).localeCompare(String(valueA));

      case "number":
        return order === "asc" ? Number(valueA) - Number(valueB) : Number(valueB) - Number(valueA);

      case "date":
        const dateA = new Date(valueA as unknown as string);
        const dateB = new Date(valueB as unknown as string);
        return order === "asc" ? dateA.getTime() - dateB.getTime() : dateB.getTime() - dateA.getTime();

      default:
        return 0;
    }
  });
}
