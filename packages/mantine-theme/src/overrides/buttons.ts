import { ActionIcon, Button } from "@mantine/core";

export default {
  ActionIcon: ActionIcon.extend({
    defaultProps: {
      variant: "subtle",
    },
  }),

  Button: Button.extend({
    defaultProps: {},
  }),
};
