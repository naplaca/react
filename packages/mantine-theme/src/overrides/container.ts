import { Container, rem } from "@mantine/core";

const CONTAINER_SIZES: Record<string, number> = {
  xxs: 300,
  xs: 540,
  sm: 720,
  md: 960,
  lg: 1140,
  xl: 1320,
  xxl: 1600,
};

export default {
  Container: Container.extend({
    vars: (_, { size, fluid }) => ({
      root: {
        "--container-size": fluid
          ? "100%"
          : size !== undefined && size in CONTAINER_SIZES
            ? rem(CONTAINER_SIZES[size])
            : rem(size),
      },
    }),
  }),
};
