import { useMantineTheme, type MantineTheme } from "@mantine/core";
import { useMediaQuery as useMantineMediaQuery } from "@mantine/hooks";

export function useMediaQuery(breakpoint: keyof MantineTheme["breakpoints"]) {
  const theme = useMantineTheme();
  return useMantineMediaQuery(`(min-width: ${theme.breakpoints[breakpoint]})`);
}
