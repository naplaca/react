import { t } from "@lingui/core/macro";
import { ActionIcon, Tooltip, type ActionIconProps } from "@mantine/core";
import { PiChecks as MarkAsReadIcon } from "react-icons/pi";

type DashboardNotificationsMarkAllAsReadProps = Omit<ActionIconProps, "children">;

export function DashboardNotificationsMarkAllAsRead(props: DashboardNotificationsMarkAllAsReadProps) {
  return (
    <Tooltip label={t`Mark all as read`}>
      <ActionIcon {...props}>
        <MarkAsReadIcon />
      </ActionIcon>
    </Tooltip>
  );
}
