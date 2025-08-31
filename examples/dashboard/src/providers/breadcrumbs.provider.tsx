import { type BreadcrumbsProps } from "@naplaca/mantine-components/components/breadcrumbs";
import { createSafeContext } from "@naplaca/react-core";
import { useState, type ReactNode } from "react";

export interface BreadcrumbsContextValues {
  breadcrumbs: BreadcrumbsProps["items"];
  setBreadcrumbs: (items: BreadcrumbsProps["items"]) => void;
}

const [Provider, useBreadcrumbs] = createSafeContext<BreadcrumbsContextValues>();

interface BreadcrumbsProviderProps {
  children: ReactNode;
}

export function BreadcrumbsProvider({ children }: BreadcrumbsProviderProps) {
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbsProps["items"]>([]);

  return <Provider value={{ breadcrumbs, setBreadcrumbs }}>{children}</Provider>;
}

export { useBreadcrumbs };
