import { useBreadcrumbs } from "#/providers/breadcrumbs.provider";
import { t } from "@lingui/core/macro";
import { Title } from "@mantine/core";
import { createFileRoute } from "@tanstack/react-router";
import { useLayoutEffect } from "react";

export const Route = createFileRoute("/_auth/resources/customers/")({
  component: CustomersList,
});

function CustomersList() {
  const { setBreadcrumbs } = useBreadcrumbs();

  useLayoutEffect(() => {
    setBreadcrumbs([{ label: t`Resources`, to: "/resources" }, { label: t`Customers` }]);
  }, []);

  return <Title order={2}>Hello "/_auth/customers/"!</Title>;
}
