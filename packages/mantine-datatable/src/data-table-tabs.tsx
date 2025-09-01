"use client";

import { CardSection, Tabs, TabsList, type CardSectionProps } from "@mantine/core";
import { forwardRef, useState } from "react";
import { DataTableTab, type DataTableTabProps } from "./data-table-tab";

export interface DataTableTabsProps extends Omit<CardSectionProps, "size" | "c" | "fw" | "tt"> {
  tabs: Omit<DataTableTabProps, "active">[];
  defaultTab?: string;
  onChange?: (tab: string) => void;
}

export const DataTableTabs = forwardRef<HTMLDivElement, DataTableTabsProps>(
  ({ tabs, onChange, defaultTab = null, ...props }, ref) => {
    const [activeTab, setActiveTab] = useState(defaultTab);

    const handleTabChange = (value: string | null) => {
      setActiveTab(value);
      if (value) onChange?.(value);
    };

    return (
      <CardSection withBorder ref={ref} {...props}>
        <Tabs value={activeTab} onChange={handleTabChange}>
          <TabsList data-no-border>
            {tabs.map((tab) => (
              <DataTableTab key={tab.value} active={activeTab === tab.value} {...tab} />
            ))}
          </TabsList>
        </Tabs>
      </CardSection>
    );
  }
);

DataTableTabs.displayName = "@naplaca/mantine-datatable/DataTableTabs";
