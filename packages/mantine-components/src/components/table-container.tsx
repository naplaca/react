import { Card, type CardProps, CardSection } from "@mantine/core";
import { type ReactNode } from "react";
import { CardTitle } from "./card-title";

interface TableContainerProps extends CardProps {
  title?: string;
  description?: string;
  actions?: ReactNode;
}

export function TableContainer({ children, title, description, actions, ...props }: TableContainerProps) {
  return (
    <Card {...props}>
      {title && <CardTitle withBorder title={title} description={description} actions={actions} />}
      <CardSection>{children}</CardSection>
    </Card>
  );
}
