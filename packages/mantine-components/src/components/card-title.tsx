import { CardSection, type CardSectionProps, Group, Text, Title } from "@mantine/core";
import { type ReactNode, forwardRef } from "react";

export interface CardTitleProps extends Omit<CardSectionProps, "size" | "c" | "fw" | "tt"> {
  title: ReactNode;
  description?: ReactNode;
  actions?: ReactNode;
}

export const CardTitle = forwardRef<HTMLDivElement, CardTitleProps>(
  ({ title, description, style, actions, withBorder = true, mb = "sm", ...props }, ref) => (
    <CardSection
      ref={ref}
      py="md"
      mb={mb}
      withBorder={withBorder}
      inheritPadding
      style={{ ...style, borderTop: "none" }}
      {...props}
    >
      <Group justify="space-between">
        <div>
          <Title order={5}>{title}</Title>
          {description && (
            <Text size="xs" c="dimmed" mt="xs" style={{ textWrap: "pretty" }}>
              {description}
            </Text>
          )}
        </div>
        {actions}
      </Group>
    </CardSection>
  )
);

CardTitle.displayName = "@naplaca/mantine-components/CardTitle";
