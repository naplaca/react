"use client";

import { Checkbox as MantineCheckbox, type CheckboxProps as MantineCheckboxProps } from "@mantine/core";
import { forwardRef } from "react";
import { useFormContext } from "./form";

export interface CheckboxProps
  extends Omit<MantineCheckboxProps, "checked" | "value" | "error" | "onFocus" | "onBlur"> {
  name: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({ name, ...props }, ref) => {
  const { form } = useFormContext();
  return (
    <MantineCheckbox ref={ref} key={form.key(name)} {...props} {...form.getInputProps(name, { type: "checkbox" })} />
  );
});

Checkbox.displayName = "@naplaca/mantine-form/Checkbox";
