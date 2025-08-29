import { Fieldset, Input, InputBase, NumberInput, PasswordInput, Select } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";

export default {
  DatePickerInput: DatePickerInput.extend({
    defaultProps: {
      radius: "md",
    },
  }),
  InputBase: InputBase.extend({
    defaultProps: {
      radius: "md",
    },
  }),
  Input: Input.extend({
    defaultProps: {
      radius: "md",
    },
  }),
  PasswordInput: PasswordInput.extend({
    defaultProps: {
      radius: "md",
    },
  }),
  Fieldset: Fieldset.extend({
    defaultProps: {
      variant: "unstyled",
      radius: "md",
    },
  }),
  NumberInput: NumberInput.extend({
    defaultProps: {
      radius: "md",
      thousandSeparator: " ",
      decimalSeparator: ",",
    },
  }),
  Select: Select.extend({
    defaultProps: {
      radius: "md",
    },
  }),
};
