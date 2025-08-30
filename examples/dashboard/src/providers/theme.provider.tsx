import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { Notifications } from "@mantine/notifications";
import { NavigationProgress } from "@mantine/nprogress";
import { theme } from "@naplaca/mantine-theme";
import type { ReactNode } from "react";

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <MantineProvider theme={theme}>
      <Notifications position="bottom-center" />
      <NavigationProgress />
      <ModalsProvider>{children}</ModalsProvider>
    </MantineProvider>
  );
}
