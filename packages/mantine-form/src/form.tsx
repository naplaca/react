"use client";

import { Box, type BoxProps, type ElementProps } from "@mantine/core";
import { type UseFormReturnType } from "@mantine/form";
import { createSafeContext } from "@naplaca/react-core";
import { Checkbox } from "./checkbox";
import { DatePickerInput } from "./date-picker-input";
import { PasswordInput } from "./password-input";
import { TextInput } from "./text-input";

interface FormContextValues {
  form: UseFormReturnType<any>;
}

const [Provider, useFormContext] = createSafeContext<FormContextValues>();

interface FormProps<FormValues> extends BoxProps, ElementProps<"form", keyof BoxProps> {
  form: UseFormReturnType<FormValues>;
}

export function Form<FormValues>({ children, form, ...props }: FormProps<FormValues>) {
  return (
    <Provider value={{ form }}>
      <Box component="form" {...props}>
        {children}
      </Box>
    </Provider>
  );
}

Form.Checkbox = Checkbox;
Form.DatePickerInput = DatePickerInput;
// Form.IbanInput = IbanInput;
// Form.ImageDropzone = ImageDropzone;
// Form.MoneyInput = MoneyInput;
// Form.NumberInput = NumberInput;
Form.PasswordInput = PasswordInput;
// Form.RadioGroup = RadioGroup;
// Form.RateInput = RateInput;
// Form.Select = Select;
// Form.Switch = Switch;
Form.TextInput = TextInput;
// Form.PhoneNumberInput = PhoneNumberInput;

export { useFormContext };
