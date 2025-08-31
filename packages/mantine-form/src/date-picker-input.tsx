"use client";

import {
  DatePickerInput as MantineDatePickerInput,
  type DatePickerInputProps as MantineDatePickerInputProps,
} from "@mantine/dates";
import { forwardRef } from "react";
import { useFormContext } from "./form";

export interface DatePickerInputProps
  extends Omit<MantineDatePickerInputProps, "checked" | "value" | "error" | "onFocus" | "onBlur"> {
  name: string;
}

export const DatePickerInput = forwardRef<HTMLButtonElement, DatePickerInputProps>(({ name, ...props }, ref) => {
  const { form } = useFormContext();
  return <MantineDatePickerInput ref={ref} key={form.key(name)} {...props} {...form.getInputProps(name)} />;
});

DatePickerInput.displayName = "@naplaca/mantine-form/DatePickerInput";
