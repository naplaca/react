import { Anchor } from "@mantine/core";
import { forwardRef, type HTMLAttributes } from "react";

export interface RouterLinkProps extends HTMLAttributes<HTMLAnchorElement> {
  to: string;
}

export const RouterLink = forwardRef<HTMLAnchorElement, RouterLinkProps>(
  ({ to, children, color = "inherit", ...props }, ref) => (
    <Anchor ref={ref} href={to} c={color} {...props}>
      {children}
    </Anchor>
  )
);

RouterLink.displayName = "@naplaca/mantine-components/RouterLink";
