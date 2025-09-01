import type { DefaultMantineColor, MantineColorsTuple, MantineThemeColors } from "@mantine/core";

type ExtendedCustomColors = "primary" | DefaultMantineColor;

declare module "@mantine/core" {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedCustomColors, MantineColorsTuple>;
  }
}

const colors = {
  primary: [
    "#cfeae7",
    "#adddd9",
    "#8bd0ca",
    "#69c3bb",
    "#47b5ab",
    "#47b5ab",
    "#338d85",
    "#22645e",
    "#113c38",
    "#011312",
  ],
} satisfies Partial<MantineThemeColors>;

export default colors;
