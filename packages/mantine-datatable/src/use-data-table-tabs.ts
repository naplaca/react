import { useState } from "react";
import { type DataTableTabsProps } from "./data-table-tabs";

function defaultToQuery(tab?: string) {
  return tab ? { "filter[status]": tab } : {};
}

export interface UseDataTableTabsArgs<Q> extends DataTableTabsProps {
  toQuery?: (tab?: string) => Q;
}

export type UseDataTableTabsReturn = ReturnType<typeof useDataTableTabs>;

export function useDataTableTabs<Q = { "filter[status]"?: string }>({
  tabs,
  toQuery,
  defaultTab,
  onChange,
}: UseDataTableTabsArgs<Q>) {
  const [currentTab, setCurrentTab] = useState(defaultTab);

  const handleTabChange = (value: string) => {
    setCurrentTab(value);
    onChange?.(value);
  };

  return {
    tabs,
    defaultTab,
    currentTab,
    onChange: handleTabChange,
    query: (toQuery ?? defaultToQuery)(currentTab),
  } as const;
}
