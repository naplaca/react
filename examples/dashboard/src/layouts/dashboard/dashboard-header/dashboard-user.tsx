import { Avatar, type AvatarProps, type ElementProps, Menu } from "@mantine/core";
import { PiGearSixDuotone, PiSignOut } from "react-icons/pi";

type DashboardUserProps = Omit<AvatarProps, "src" | "alt"> & ElementProps<"div", keyof AvatarProps>;

export function DashboardUser(props: DashboardUserProps) {
  return (
    <Menu>
      <Menu.Target>
        <Avatar
          alt="Current user"
          name="JohnDoe"
          color="initials"
          {...props}
          style={{ cursor: "pointer", ...props.style }}
        />
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item leftSection={<PiGearSixDuotone size="1rem" />} disabled>
          Definições
        </Menu.Item>

        <Menu.Divider />

        <Menu.Item leftSection={<PiSignOut size="1rem" />}>Terminar sessão</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
