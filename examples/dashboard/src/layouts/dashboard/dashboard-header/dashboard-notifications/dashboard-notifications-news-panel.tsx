import { Trans } from "@lingui/react/macro";
import { Flex, TabsPanel, Text, type TabsPanelProps } from "@mantine/core";
import { PiStarFourDuotone as NoNewsIcon } from "react-icons/pi";

type DashboardNotificationsNewsPanelProps = Omit<TabsPanelProps, "children">;

export function DashboardNotificationsNewsPanel(props: DashboardNotificationsNewsPanelProps) {
  return (
    <TabsPanel {...props}>
      <Flex direction="column" justify="center" align="center" mih="24rem">
        <NoNewsIcon size="6rem" />
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
