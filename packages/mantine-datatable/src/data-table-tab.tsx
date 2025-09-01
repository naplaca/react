"use client"

import { Badge, Indicator, isNumberLike, TabsTab, type TabsTabProps } from "@mantine/core";
import { forwardRef, type ReactNode } from "react";

export interface DataTableTabProps extends Omit<TabsTabProps, "children"> {
  label: string;
  active?: boolean;
  pulsing?: boolean;
  badge?: number | string | ReactNode;
}

export const DataTableTab = forwardRef<HTMLButtonElement, DataTableTabProps>(
  ({ label, badge, pulsing, rightSection, active, ...props }, ref) => {
    const hasCounter = isNumberLike(badge);

    const counter = hasCounter && (
      <Indicator processing color={props.color} size={6} offset={-8} position="middle-end" disabled={!pulsing}>
        <Badge variant={active ? "filled" : "light"} color={props.color} radius="md">
          {badge}
        </Badge>
      </Indicator>
    );

    return (
      <TabsTab ref={ref} {...props} rightSection={rightSection ?? counter}>
        <Indicator
          processing
          color={props.color}
          size={6}
          offset={-8}
          position="middle-end"
          disabled={hasCounter || !pulsing}
        >
          <span>{label}</span>
        </Indicator>
      </TabsTab>
    );
  },
);

DataTableTab.displayName = "@naplaca/mantine-datatable/DataTableTab"