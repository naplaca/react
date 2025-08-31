import { Logo } from "#/components/logo";
import { t } from "@lingui/core/macro";
import { Burger, Divider, Group } from "@mantine/core";
import { ColorSchemeToggler } from "@naplaca/mantine-components/components/color-scheme-toggler";
import { DashboardBreadcrumbs } from "./dashboard-breadcrumbs";
import { DashboardNotifications } from "./dashboard-notifications";
import { DashboardQuickCreate } from "./dashboard-quick-create";
import { DashboardSearch } from "./dashboard-search";
import { DashboardUser } from "./dashboard-user";

interface DashboardHeaderProps {
  sidebarOpened: boolean;
  toggleSidebar: () => void;
}

export function DashboardHeader({ sidebarOpened, toggleSidebar }: DashboardHeaderProps) {
  return (
    <Group h="100%" px="md" justify="space-between" wrap="nowrap">
      <Group wrap="nowrap">
        <Burger opened={sidebarOpened} onClick={toggleSidebar} size="sm" />
        <Logo size="2rem" to="/" display="block" />
        <DashboardBreadcrumbs />
      </Group>

      <Group wrap="nowrap">
        <DashboardSearch />
        <DashboardQuickCreate />
        <ColorSchemeToggler
          labels={{
            auto: t`Automatic`,
            dark: t`Dark mode`,
            light: t`Light mode`,
          }}
        />
        <DashboardNotifications />
        <Divider orientation="vertical" />
        <DashboardUser />
      </Group>
    </Group>
  );
}
