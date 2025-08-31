import { t } from "@lingui/core/macro";
import { ActionIcon, Tooltip, type ActionIconProps } from "@mantine/core";
import { PiGearDuotone as SettingsIcon } from "react-icons/pi";

type DashboardNotificationsSettingsProps = Omit<ActionIconProps, "children">;

export function DashboardNotificationsSettings(props: DashboardNotificationsSettingsProps) {
  return (
    <Tooltip label={t`Notification settings`}>
      <ActionIcon {...props}>
        <SettingsIcon />
      </ActionIcon>
    </Tooltip>
  );
}
