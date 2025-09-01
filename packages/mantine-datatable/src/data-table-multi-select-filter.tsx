"use client";

import { type ComboboxData, MultiSelect, type MultiSelectProps } from "@mantine/core";
import { useEffect } from "react";
import type { UseDataTableFilters } from "./use-data-table-filters";

interface DataTableMultiSelectFilterProps extends Omit<MultiSelectProps, "value" | "onChange" | "data"> {
  accessor: string;
  label: string;
  filters: UseDataTableFilters;
  data: ComboboxData;
}

export function DataTableMultiSelectFilter({
  accessor,
  label,
  data,
  filters,
  ...props
}: DataTableMultiSelectFilterProps) {
  useEffect(() => {
    filters.initFilter(accessor, {
      type: "multi-select",
      data,
      label,
      onClear: () => filters.clear(accessor),
    });
  }, [accessor, label, data, filters]);

  const currentValue = filters.filters[accessor]?.value as string[];

  return (
    <MultiSelect
      {...props}
      data={data}
      label={label}
      value={currentValue ?? []}
      onChange={(value) => filters.onChange(accessor, value)}
    />
  );
}