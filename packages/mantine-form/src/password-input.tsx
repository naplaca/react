"use client";

import {
  PasswordInput as MantinePasswordInput,
  type PasswordInputProps as MantinePasswordInputProps,
} from "@mantine/core";
import { forwardRef } from "react";
import { useFormContext } from "./form";

export interface PasswordInputProps
  extends Omit<MantinePasswordInputProps, "checked" | "value" | "error" | "onFocus" | "onBlur"> {
  name: string;
}

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(({ name, ...props }, ref) => {
  const { form } = useFormContext();
  return <MantinePasswordInput ref={ref} key={form.key(name)} {...props} {...form.getInputProps(name)} />;
});

PasswordInput.displayName = "@naplaca/mantine-form/PasswordInput";
