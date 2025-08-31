import { api } from "#/resources/api";
import { Title } from "@mantine/core";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/resources/customers/$customerId/invoices")({
  component: CustomerInvoices,
});

function CustomerInvoices() {
  const { customerId } = Route.useParams();

  const customer = api.customers.getCustomer.useSuspenseQuery({
    queryKey: ["customers", customerId],
    queryData: { params: { customerId } },
  }).data.body;

  return <Title order={1}>{customer.displayName} invoices</Title>;
}
