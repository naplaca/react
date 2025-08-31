import { Trans } from "@lingui/react/macro";
import { Card, Tabs, type CardProps } from "@mantine/core";
import type { Customer } from "../../schema";

interface CustomerProfileCardProps extends Omit<CardProps, "children"> {
  customer: Customer;
}

export function CustomerProfileCard({ customer, ...props }: CustomerProfileCardProps) {
  return (
    <Card {...props}>
      <Tabs defaultValue="details">
        <Card.Section>
          <Tabs.List>
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
      </Tabs>
    </Card>
  );
}
