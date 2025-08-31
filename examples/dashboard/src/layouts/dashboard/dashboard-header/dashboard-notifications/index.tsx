import { Trans } from "@lingui/react/macro";
import { ActionIcon, Divider, Group, Indicator, Popover, Tabs, Tooltip } from "@mantine/core";
import { PiBellDuotone as NotificationsIcon } from "react-icons/pi";
import { DashboardNotificationsEventsPanel } from "./dashboard-notifications-events-panel";
import { DashboardNotificationsMarkAllAsRead } from "./dashboard-notifications-mark-all-as-read";
import { DashboardNotificationsNewsPanel } from "./dashboard-notifications-news-panel";
import { DashboardNotificationsNotificationsPanel } from "./dashboard-notifications-notifications-panel";
import { DashboardNotificationsSettings } from "./dashboard-notifications-settings";

export function DashboardNotifications() {
  const hasNewNotifications = true;

  return (
    <Popover width="24rem">
      <Popover.Target>
        <Tooltip label="Notificações">
          <ActionIcon variant="transparent" c="inherit" style={{ overflow: "visible" }}>
            <Indicator
              inline
              withBorder
              offset={6}
              size={12}
              processing={hasNewNotifications}
              disabled={!hasNewNotifications}
            >
              <NotificationsIcon size="100%" />
            </Indicator>
          </ActionIcon>
        </Tooltip>
      </Popover.Target>

      <Popover.Dropdown p="0.25rem">
        <Tabs defaultValue="notifications">
          <Group justify="space-between">
            <Tabs.List data-no-border>
              <Tabs.Tab value="notifications">
                <Trans>Notifications</Trans>
              </Tabs.Tab>
              <Tabs.Tab value="events">
                <Trans>Events</Trans>
              </Tabs.Tab>
              <Tabs.Tab value="news">
                <Trans>News</Trans>
              </Tabs.Tab>
            </Tabs.List>

            <Group gap="xs">
              <DashboardNotificationsMarkAllAsRead variant="transparent" c="inherit" />
              <DashboardNotificationsSettings variant="transparent" c="inherit" />
            </Group>
          </Group>

          <Divider />

          <DashboardNotificationsNotificationsPanel value="notifications" />
          <DashboardNotificationsEventsPanel value="events" />
          <DashboardNotificationsNewsPanel value="news" />
        </Tabs>
      </Popover.Dropdown>
    </Popover>
  );
}
