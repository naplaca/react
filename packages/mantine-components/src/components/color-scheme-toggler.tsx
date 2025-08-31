"use client";

import { ActionIcon, type ActionIconProps, type ElementProps, Tooltip, useMantineColorScheme } from "@mantine/core";
import { PiMoonDuotone as DarkIcon, PiSunDimDuotone as LightIcon, PiDesktop as SystemIcon } from "react-icons/pi";

const options = {
  auto: { icon: SystemIcon, changeTo: "dark" },
  dark: { icon: DarkIcon, changeTo: "light" },
  light: { icon: LightIcon, changeTo: "auto" },
} as const;

type ColorSchemeTogglerProps = Omit<ActionIconProps, "children" | "c" | "onClick" | "size"> &
  ElementProps<"button", keyof ActionIconProps> & {
    labels: {
      auto: string;
      dark: string;
      light: string;
    };
  };

export function ColorSchemeToggler({ labels, ...props }: ColorSchemeTogglerProps) {
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const { icon: Icon, changeTo } = options[colorScheme];

  return (
    <Tooltip label={labels[colorScheme]}>
      <ActionIcon variant="transparent" c="inherit" onClick={() => setColorScheme(changeTo)} {...props}>
        <Icon size="100%" />
      </ActionIcon>
    </Tooltip>
  );
}
