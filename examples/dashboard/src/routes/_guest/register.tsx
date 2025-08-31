import { RouterLink } from "#/components/router-link";
import { RegisterForm } from "#/resources/auth/components/register-form";
import { ActionIcon, Box, Divider, Group, Image, SimpleGrid, Text } from "@mantine/core";
import { createFileRoute } from "@tanstack/react-router";
import { FaDiscord as DiscordIcon, FaFacebookF as FacebookIcon, FaGoogle as GoogleIcon } from "react-icons/fa";

export const Route = createFileRoute("/_guest/register")({
  component: Register,
});

function Register() {
  return (
    <SimpleGrid spacing="0" cols={{ base: 1, md: 2 }}>
      <Box p="lg">
        <Text ta="center" size="lg" fw="bold">
          Register
        </Text>
        <Text ta="center" mb="lg">
          Create a new free account
        </Text>

        <RegisterForm mb="lg" />

        <Text ta="center" size="sm" c="dimmed">
          By signing up, I agree to <RouterLink to="/">Terms of service</RouterLink> and{" "}
          <RouterLink to="/">Privacy policy</RouterLink>.
        </Text>

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
          Already have an account? <RouterLink to="/login">Login</RouterLink>
        </Text>
      </Box>
      <Image src="/images/registration.webp" alt="register hero image" h="100%" visibleFrom="md" />
    </SimpleGrid>
  );
}
