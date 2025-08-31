import { NavLink, type NavLinkProps } from "@mantine/core";
import { Registry } from "../../registry";

export interface SidebarSubItemProps extends NavLinkProps {
  label: string;
  href: string;
}

export function SidebarSubItem({ variant = "subtle", label, href, ...props }: SidebarSubItemProps) {
  const pathname = Registry.getInstance().getHook("usePathname")();
  const RouterLink = Registry.getInstance().getComponent("RouterLink");

  return (
    <NavLink
      variant={variant}
      component={RouterLink}
      className="sidebar-sub-item"
      to={href}
      active={pathname.endsWith(href)}
      label={label}
      leftSection={<span className="dot" />}
      {...props}
    />
  );
}
