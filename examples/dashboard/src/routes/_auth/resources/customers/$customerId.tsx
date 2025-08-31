import { useBreadcrumbs } from "#/providers/breadcrumbs.provider";
import { api } from "#/resources/api";
import { CustomerSidebar } from "#/resources/customers/components/customer-sidebar";
import { t } from "@lingui/core/macro";
import { Box, Group } from "@mantine/core";
import { createFileRoute, Outlet, redirect, useLayoutEffect } from "@tanstack/react-router";
import { z } from "zod";

export const Route = createFileRoute("/_auth/resources/customers/$customerId")({
  component: CustomerDetails,
  params: {
    parse: (params) => ({ customerId: z.uuid().parse(params.customerId) }),
    stringify: (params) => ({ customerId: params.customerId }),
  },
  beforeLoad: ({ params, location: { pathname, search } }) => {
    if (pathname === `/resources/customers/${params.customerId}`) {
      redirect({ to: "/resources/customers/$customerId/profile", search, params, throw: true });
    }
  },
  loader: ({ context, params }) =>
    context.queryClient.ensureQueryData({
      queryKey: ["customers", params.customerId],
      queryFn: () => api.customers.getCustomer.query({ params: { customerId: params.customerId } }),
    }),
});

function CustomerDetails() {
  const { customerId } = Route.useParams();
  const { setBreadcrumbs } = useBreadcrumbs();

  const customer = api.customers.getCustomer.useSuspenseQuery({
    queryKey: ["customers", customerId],
    queryData: { params: { customerId } },
  }).data.body;

  useLayoutEffect(() => {
    setBreadcrumbs([
      { label: t`Resources`, to: "/resources" },
      { label: t`Customers`, to: "/resources/customers" },
      { label: customer.displayName, to: `/resources/customers/${customerId}` },
    ]);
  }, []);

  return (
    <Group align="flex-start">
      <CustomerSidebar customer={customer} miw="16rem" w={{ base: "100%", md: "16rem" }} hideHeader />
      <Box flex="1" miw="fit-content">
        <Outlet />
      </Box>
    </Group>
  );
}
