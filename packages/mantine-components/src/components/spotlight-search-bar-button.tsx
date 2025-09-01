"use client";

import {
  Box,
  Button,
  TextInput,
  UnstyledButton,
  type BoxProps,
  type ElementProps,
  type UnstyledButtonProps,
} from "@mantine/core";
import type { spotlight } from "@mantine/spotlight";
import cx from "clsx";
import { type ReactNode } from "react";
import { PiCommand as CommandIcon, PiMagnifyingGlassBold as SearchIcon } from "react-icons/pi";

interface SpotlightSearchBarButtonProps
  extends Omit<UnstyledButtonProps, "children">,
  Pick<BoxProps, "w">,
  ElementProps<"div", keyof UnstyledButtonProps> {
  placeholder?: string;
  spotlight: ReactNode;
  commandKey?: string;
  handlers: typeof spotlight
}

export function SpotlightSearchBarButton({
  placeholder,
  spotlight: spotlightComponent,
  handlers,
  commandKey = "K",
  className,
  w,
  ...props
}: SpotlightSearchBarButtonProps) {
  return (
    <Box w={w} className={cx("spotlight-search-bar", className)}>
      <UnstyledButton component="div" className="spotlight-search-bar-button-input" onClick={handlers.open} {...props}>
        <TextInput
          placeholder={placeholder}
          leftSection={<SearchIcon />}
          rightSection={
            <Button component="span" size="compact-xs" leftSection={<CommandIcon size="1rem" />}>
              K
            </Button>
          }
        />
      </UnstyledButton>

      <Button
        c="inherit"
        variant="transparent"
        className="spotlight-search-bar-button-button"
        onClick={handlers.open}
        leftSection={<SearchIcon size="1.2rem" />}
        rightSection={
          <Button component="span" variant="filled" size="compact-md" leftSection={<CommandIcon size="1rem" />}>
            {commandKey}
          </Button>
        }
      />

      {spotlightComponent}
    </Box>
  );
}
