import { ActionIcon, Menu, Tooltip } from "@mantine/core";
import { PiPlusCircleDuotone as CreateIcon, PiInvoiceDuotone, PiUserDuotone } from "react-icons/pi";

export function DashboardQuickCreate() {
  return (
    <Menu>
      <Menu.Target>
        <Tooltip label="Quick create">
          <ActionIcon variant="transparent" c="inherit" style={{ overflow: "visible" }}>
            <CreateIcon size="100%" />
          </ActionIcon>
        </Tooltip>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item leftSection={<PiUserDuotone size="1rem" />}>Customer</Menu.Item>
        <Menu.Item leftSection={<PiInvoiceDuotone size="1rem" />}>Invoice</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
