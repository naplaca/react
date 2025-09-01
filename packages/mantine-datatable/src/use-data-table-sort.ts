import { type DataTableSortStatus } from "mantine-datatable";
import { useState } from "react";

function sortStatusToQuery<Fields>({ direction, columnAccessor }: DataTableSortStatus<Fields>) {
  return { sort: `${direction === "desc" ? "-" : ""}${columnAccessor.toString()}` };
}

export interface UseDataTableSortArgs<SortableFields, Q = unknown> {
  column?: DataTableSortStatus<SortableFields>["columnAccessor"];
  direction?: DataTableSortStatus<SortableFields>["direction"];
  toQuery?: (status: DataTableSortStatus<SortableFields>) => Q;
}

export type UseDataTableSortReturn<SortableFields> = ReturnType<typeof useDataTableSort<SortableFields>>;

export function useDataTableSort<SortableFields, Q = { sort: string }>({
  column = "",
  direction = "asc",
  toQuery,
}: UseDataTableSortArgs<SortableFields, Q>) {
  const [status, setStatus] = useState<DataTableSortStatus<SortableFields>>({
    columnAccessor: column,
    direction,
  });

  const handleChange = (newStatus: DataTableSortStatus<SortableFields>) => {
    setStatus(newStatus);
  };

  return {
    change: handleChange,
    column: status.columnAccessor as keyof SortableFields,
    direction: status.direction,
    status,
    query: (toQuery ?? sortStatusToQuery)(status),
  } as const;
}
