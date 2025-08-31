import { Title, type TitleProps } from "@mantine/core";

export type SidebarSectionTitleProps = TitleProps;

export function SidebarSectionTitle({ order = 6, ...props }: SidebarSectionTitleProps) {
  return <Title order={order} className="sidebar-title" {...props} />;
}
