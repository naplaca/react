import { Fieldset, Input, InputBase, NumberInput, PasswordInput, Select } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";

export default {
  DatePickerInput: DatePickerInput.extend({
    defaultProps: {},
  }),
  InputBase: InputBase.extend({
    defaultProps: {},
  }),
  Input: Input.extend({
    defaultProps: {},
  }),
  PasswordInput: PasswordInput.extend({
    defaultProps: {},
  }),
  Fieldset: Fieldset.extend({
    defaultProps: {
      variant: "unstyled",
    },
  }),
  NumberInput: NumberInput.extend({
    defaultProps: {
      thousandSeparator: " ",
      decimalSeparator: ",",
    },
  }),
  Select: Select.extend({
    defaultProps: {},
  }),
};
