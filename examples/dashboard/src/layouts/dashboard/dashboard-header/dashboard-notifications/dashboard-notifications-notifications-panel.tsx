import { Trans } from "@lingui/react/macro";
import { Flex, TabsPanel, Text, type TabsPanelProps } from "@mantine/core";
import { PiBellDuotone as NoNotificationsIcon } from "react-icons/pi";

type DashboardNotificationsNotificationsPanelProps = Omit<TabsPanelProps, "children">;

export function DashboardNotificationsNotificationsPanel(props: DashboardNotificationsNotificationsPanelProps) {
  return (
    <TabsPanel {...props}>
      <Flex direction="column" justify="center" align="center" mih="24rem">
        <NoNotificationsIcon size="6rem" />
        <Text mt="md">
          <Trans>Nothing new</Trans>
        </Text>
        <Text c="dimmed">
          <Trans>There is nothing new to show you right now.</Trans>
        </Text>
      </Flex>
    </TabsPanel>
  );
}
