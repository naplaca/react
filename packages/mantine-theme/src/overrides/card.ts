import { Card } from "@mantine/core";

export default {
  Card: Card.extend({
    classNames: {
      root: "naplaca-card-root",
    },
    defaultProps: {
      withBorder: true,
    },
  }),
};
