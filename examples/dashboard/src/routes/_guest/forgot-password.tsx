import { RouterLink } from "#/components/router-link";
import { ForgotPasswordForm } from "#/resources/auth/components/forgot-password-form";
import { Flex, Image, SimpleGrid, Text } from "@mantine/core";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_guest/forgot-password")({
  component: ForgotPassword,
});

function ForgotPassword() {
  return (
    <SimpleGrid spacing="0" cols={{ base: 1, md: 2 }}>
      <Flex direction="column" justify="space-between" p="lg">
        <div>
          <Text ta="center" size="lg" fw="bold">
            Forgot your password?
          </Text>
          <Text ta="center">Enter your email to reset your password</Text>
        </div>

        <ForgotPasswordForm mb="lg" />

        <Text size="sm" ta="center">
          <RouterLink to="/login">Back to login</RouterLink>
        </Text>
      </Flex>

      <Image src="/images/forgot-password.webp" alt="login hero image" h="100%" visibleFrom="md" />
    </SimpleGrid>
  );
}
