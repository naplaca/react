"use client";

import { NavLink, type NavLinkProps } from "@mantine/core";
import type { ReactNode } from "react";
import { Registry } from "../../registry";
import { SidebarSubItem, type SidebarSubItemProps } from "./sidebar-sub-item";

export interface SidebarItemProps extends NavLinkProps {
  label: string;
  href: string;
  icon: ReactNode;
  badge?: ReactNode;
  subItems?: SidebarSubItemProps[];
}

export function SidebarItem({ variant = "subtle", href, icon, badge, subItems, ...props }: SidebarItemProps) {
  const pathname = Registry.getInstance().getHook("usePathname")();
  const RouterLink = Registry.getInstance().getComponent("RouterLink");

  if (subItems) {
    return (
      <NavLink
        className="sidebar-item"
        variant={variant}
        childrenOffset={0}
        active={pathname.endsWith(href)}
        leftSection={icon}
        rightSection={badge}
        {...props}
      >
        {subItems.map((item) => (
          <SidebarSubItem key={item.label} {...item} />
        ))}
      </NavLink>
    );
  }

  return (
    <NavLink
      className="sidebar-item"
      variant={variant}
      component={RouterLink}
      to={href}
      leftSection={icon}
      rightSection={badge}
      active={pathname.endsWith(href)}
      {...props}
    />
  );
}
