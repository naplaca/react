import { Trans } from "@lingui/react/macro";
import { Flex, TabsPanel, Text, type TabsPanelProps } from "@mantine/core";
import { PiCalendarStarDuotone as NoEventsIcon } from "react-icons/pi";

type DashboardNotificationsEventsPanelProps = Omit<TabsPanelProps, "children">;

export function DashboardNotificationsEventsPanel(props: DashboardNotificationsEventsPanelProps) {
  return (
    <TabsPanel {...props}>
      <Flex direction="column" justify="center" align="center" mih="24rem">
        <NoEventsIcon size="6rem" />
        <Text mt="md">
          <Trans>No upcoming events</Trans>
        </Text>
        <Text c="dimmed">
          <Trans>There are no upcoming events for you.</Trans>
        </Text>
      </Flex>
    </TabsPanel>
  );
}
