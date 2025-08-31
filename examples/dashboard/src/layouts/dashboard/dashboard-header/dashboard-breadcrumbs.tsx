import { useBreadcrumbs } from "#/providers/breadcrumbs.provider";
import { Breadcrumbs } from "@naplaca/mantine-components/components/breadcrumbs";

export function DashboardBreadcrumbs() {
  const { breadcrumbs } = useBreadcrumbs();

  return <Breadcrumbs visibleFrom="md" items={breadcrumbs} />;
}
