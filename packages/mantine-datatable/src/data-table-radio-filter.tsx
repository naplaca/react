"use client";

import { type ComboboxItem, Radio, type RadioGroupProps, Stack } from "@mantine/core";
import { useEffect } from "react";
import type { UseDataTableFilters } from "./use-data-table-filters";

interface DataTableRadioFilterProps extends Omit<RadioGroupProps, "value" | "onChange" | "children"> {
  accessor: string;
  label: string;
  filters: UseDataTableFilters;
  data: ComboboxItem[];
}

export function DataTableRadioFilter({ accessor, label, data, filters, ...props }: DataTableRadioFilterProps) {
  useEffect(() => {
    filters.initFilter(accessor, {
      type: "multi-select",
      data,
      label,
      onClear: () => filters.clear(accessor),
    });
  }, [accessor, label, data, filters]);

  const currentValue = filters.filters[accessor]?.value as string;

  return (
    <Radio.Group {...props} label={label} value={currentValue} onChange={(value) => filters.onChange(accessor, value)}>
      <Stack mt="sm">
        {data.map((option) => (
          <Radio key={option.value} value={option.value} label={option.label} />
        ))}
      </Stack>
    </Radio.Group>
  );
}
