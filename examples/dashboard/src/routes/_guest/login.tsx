import { RouterLink } from "#/components/router-link";
import { LoginForm } from "#/resources/auth/components/login-form";
import { Trans } from "@lingui/react/macro";
import { ActionIcon, Box, Divider, Group, Image, SimpleGrid, Text } from "@mantine/core";
import { createFileRoute } from "@tanstack/react-router";
import { FaDiscord as DiscordIcon, FaFacebookF as FacebookIcon, FaGoogle as GoogleIcon } from "react-icons/fa";

export const Route = createFileRoute("/_guest/login")({
  component: Login,
});

function Login() {
  return (
    <SimpleGrid spacing="0" cols={{ base: 1, md: 2 }}>
      <Box p="lg">
        <Text ta="center" size="lg" fw="bold">
          <Trans>Welcome back</Trans>
        </Text>
        <Text ta="center" mb="lg">
          <Trans>Login to your account</Trans>
        </Text>

        <LoginForm />

        <Divider my="lg" label="Or continue with" />

        <Group justify="center" mb="lg">
          <ActionIcon size={32} variant="default">
            <GoogleIcon />
          </ActionIcon>
          <ActionIcon size={32} variant="default">
            <DiscordIcon />
          </ActionIcon>
          <ActionIcon size={32} variant="default">
            <FacebookIcon />
          </ActionIcon>
        </Group>

        <Text ta="center" size="sm" c="dimmed">
          Don't have an account? <RouterLink to="/register">Sign up</RouterLink>
        </Text>
      </Box>
      <Image src="/images/login.webp" alt="login hero image" h="100%" visibleFrom="md" />
    </SimpleGrid>
  );
}
