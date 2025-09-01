"use client";

import { type ComboboxData, Select, type SelectProps } from "@mantine/core";
import { useEffect } from "react";
import type { UseDataTableFilters } from "./use-data-table-filters";

interface DataTableSelectFilterProps extends Omit<SelectProps, "value" | "onChange" | "data"> {
  accessor: string;
  label: string;
  filters: UseDataTableFilters;
  data: ComboboxData;
}

export function DataTableSelectFilter({ accessor, label, data, filters, ...props }: DataTableSelectFilterProps) {
  useEffect(() => {
    filters.initFilter(accessor, {
      type: "select",
      data,
      label,
      onClear: () => filters.clear(accessor),
    });
  }, [accessor, label, data, filters]);

  const currentValue = filters.filters[accessor]?.value as string;

  return (
    <Select
      {...props}
      data={data}
      label={label}
      value={currentValue ?? ""}
      onChange={(value) => filters.onChange(accessor, value ?? undefined)}
    />
  );
}
