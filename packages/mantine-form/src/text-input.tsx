"use client";

import { TextInput as MantineTextInput, type TextInputProps as MantineTextInputProps } from "@mantine/core";
import { forwardRef } from "react";
import { useFormContext } from "./form";

export interface TextInputProps
  extends Omit<MantineTextInputProps, "checked" | "value" | "error" | "onFocus" | "onBlur"> {
  name: string;
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(({ name, ...props }, ref) => {
  const { form } = useFormContext();
  return <MantineTextInput ref={ref} key={form.key(name)} {...props} {...form.getInputProps(name)} />;
});

TextInput.displayName = "@naplaca/mantine-form/TextInput";
