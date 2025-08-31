import { RouterLink } from "#/components/router-link";
import { Button, Group, Stack, type BoxProps } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useId } from "@mantine/hooks";
import { Form } from "@naplaca/mantine-form";
import { zod4Resolver } from "mantine-form-zod-resolver";
import { LoginRequest } from "../schema";

interface LoginFormProps extends Omit<BoxProps, "children"> {
  onSuccess?: () => void;
}

export function LoginForm({ onSuccess, ...props }: LoginFormProps) {
  const formId = useId();
  const form = useForm({
    validate: zod4Resolver(LoginRequest),
    initialValues: {
      email: "john.doe@example.com",
      password: "123456789",
      remember: false,
    },
  });

  const handleSubmit = form.onSubmit((variables) => {
    console.log({ variables });
  });

  return (
    <Form form={form} id={formId} onSubmit={handleSubmit} {...props}>
      <Stack>
        <Form.TextInput name="email" label="Email" type="email" required />
        <Form.PasswordInput name="password" label="Password" required />
        <Group justify="space-between">
          <Form.Checkbox name="remember" label="Remember me" />
          <RouterLink size="sm" to="/forgot-password">
            Forgot password?
          </RouterLink>
        </Group>
        <Button type="submit" form={formId}>
          Entrar
        </Button>
      </Stack>
    </Form>
  );
}
