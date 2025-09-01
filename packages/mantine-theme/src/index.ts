import { createTheme, type MantineThemeOverride } from "@mantine/core";
import colors from "./colors";
import components from "./overrides";

export const theme: MantineThemeOverride = createTheme({
  primaryColor: "primary",
  primaryShade: { light: 6, dark: 8 },
  fontFamily: "Inter, sans-serif",
  cursorType: "pointer",
  colors,
  defaultRadius: "md",
  fontSmoothing: true,
  focusRing: "auto",
  components,
  breakpoints: {
    "xs": "30em",
    "sm": "40em",
    "md": "48em",
    "lg": "64em",
    "xl": "80em",
    "2xl": "96em",
    "3xl": "120em",
    "4xl": "160em",
  },
});
