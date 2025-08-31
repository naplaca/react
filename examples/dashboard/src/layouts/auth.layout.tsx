import { Logo } from "#/components/logo";
import { Card, Flex, Text } from "@mantine/core";
import { Outlet } from "@tanstack/react-router";

export function AuthLayout() {
  return (
    <Flex flex="1" p="md" direction="column" justify="center" align="center" gap="md">
      <Flex align="center" gap="xs">
        <Logo size="2rem" display="block" c="var(--mantine-primary-color-filled)" />
        <Text>NaPlaca Inc.</Text>
      </Flex>

      <Card w="100%" maw="48rem" p="0">
        <Outlet />
      </Card>
    </Flex>
  );
}
