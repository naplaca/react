import { t } from "@lingui/core/macro";
import { Trans } from "@lingui/react/macro";
import { Card, Tabs, type CardProps } from "@mantine/core";
import { CardTitle } from "@naplaca/mantine-components/components/card-title";
import type { Customer } from "../../schema";

interface CustomerProfileCardProps extends Omit<CardProps, "children"> {
  customer: Customer;
}

export function CustomerProfileCard({ customer, ...props }: CustomerProfileCardProps) {
  return (
    <Card component={Tabs} defaultValue="details" {...props}>
      <CardTitle title={t`${customer.displayName} profile`} description={t`Manage customer details, billing, shipping and admin assignments.`} />

      <Card.Section withBorder>
        <Tabs.List data-no-border>
          <Tabs.Tab value="details">
            <Trans>Customer details</Trans>
          </Tabs.Tab>
          <Tabs.Tab value="billing">
            <Trans>Billing & Shipping</Trans>
          </Tabs.Tab>
          <Tabs.Tab value="admins">
            <Trans>Customer Admins</Trans>
          </Tabs.Tab>
        </Tabs.List>
      </Card.Section>

      <h1>Profile</h1>
    </Card>
  );
}
