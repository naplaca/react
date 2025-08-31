import { api } from "#/resources/api";
import { CustomerProfileCard } from "#/resources/customers/components/customer-profile-card";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/resources/customers/$customerId/profile")({
  component: CustomerProfile,
});

function CustomerProfile() {
  const { customerId } = Route.useParams();

  const customer = api.customers.getCustomer.useSuspenseQuery({
    queryKey: ["customers", customerId],
    queryData: { params: { customerId } },
  }).data.body;

  return <CustomerProfileCard customer={customer} />;
}
