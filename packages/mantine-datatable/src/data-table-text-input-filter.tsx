"use client";

import { TextInput, type TextInputProps } from "@mantine/core";
import { useDebouncedState } from "@mantine/hooks";
import { useEffect } from "react";
import type { UseDataTableFilters } from "./use-data-table-filters";

interface DataTableTextInputFilterProps extends Omit<TextInputProps, "value" | "onChange"> {
  accessor: string;
  label: string;
  filters: UseDataTableFilters;
}

export function DataTableTextInputFilter({ accessor, label, filters, ...props }: DataTableTextInputFilterProps) {
  const [value, setValue] = useDebouncedState("", 200);

  useEffect(() => {
    filters.initFilter(accessor, { type: "text", label, onClear: () => filters.clear(accessor) });
  }, []);

  useEffect(() => {
    filters.onChange(accessor, value);
  }, [value]);

  return <TextInput {...props} label={label} defaultValue={value} onChange={(e) => setValue(e.currentTarget.value)} />;
}