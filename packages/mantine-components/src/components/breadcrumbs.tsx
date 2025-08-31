"use client";

import {
  Anchor,
  Breadcrumbs as MantineBreadcrumbs,
  Text,
  type BreadcrumbsProps as MantineBreadcrumbsProps,
} from "@mantine/core";
import { Registry } from "../registry";

export interface BreadcrumbsProps extends Omit<MantineBreadcrumbsProps, "children"> {
  items: { label: string; to?: string }[];
}

export function Breadcrumbs({ items, ...props }: BreadcrumbsProps) {
  const RouterLink = Registry.getInstance().getComponent("RouterLink");

  return (
    <MantineBreadcrumbs {...props}>
      {items.map((item) =>
        item.to ? (
          <Anchor fz="sm" underline="never" c="inherit" component={RouterLink} key={item.label} to={item.to}>
            {item.label}
          </Anchor>
        ) : (
          <Text key={item.label} c="dimmed" fz="sm">
            {item.label}
          </Text>
        )
      )}
    </MantineBreadcrumbs>
  );
}
