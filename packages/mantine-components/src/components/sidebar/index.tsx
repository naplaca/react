import { Divider, Stack, type StackProps } from "@mantine/core";
import cx from "clsx";
import { SidebarItem, type SidebarItemProps } from "./sidebar-item";
import { SidebarSectionTitle } from "./sidebar-section-title";

export interface SidebarSectionProps {
  header: string;
  items: SidebarItemProps[];
}

export interface SidebarProps extends StackProps {
  hideHeader?: boolean;
  hideDivider?: boolean;
  sections: SidebarSectionProps[];
}

export function Sidebar({ gap = "md", sections, hideHeader, hideDivider, className, ...props }: SidebarProps) {
  return (
    <Stack {...props} gap={gap} className={cx("naplaca-sidebar", className)}>
      {sections.map((section, index) => (
        <div key={section.header}>
          {index !== 0 && !hideDivider && <Divider mb="lg" mx="md" />}
          {!hideHeader && <SidebarSectionTitle>{section.header}</SidebarSectionTitle>}

          {section.items.map((item) => (
            <SidebarItem key={item.label} {...item} />
          ))}
        </div>
      ))}
    </Stack>
  );
}
