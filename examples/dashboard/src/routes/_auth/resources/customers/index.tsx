import { useBreadcrumbs } from "#/providers/breadcrumbs.provider";
import { api } from "#/resources/api";
import { CustomersDataTable } from "#/resources/customers/components/customers-data-table";
import { t } from "@lingui/core/macro";
import { createFileRoute } from "@tanstack/react-router";
import { useLayoutEffect } from "react";

export const Route = createFileRoute("/_auth/resources/customers/")({
  component: CustomersList,
  loader: ({ context }) =>
    context.queryClient.ensureQueryData({
      queryKey: ["customers", "metrics"],
      queryFn: () => api.customers.getCustomersMetrics.query(),
    }),
});

function CustomersList() {
  const { setBreadcrumbs } = useBreadcrumbs();

  useLayoutEffect(() => {
    setBreadcrumbs([{ label: t`Resources`, to: "/resources" }, { label: t`Customers` }]);
  }, []);

  return <CustomersDataTable />;
}
