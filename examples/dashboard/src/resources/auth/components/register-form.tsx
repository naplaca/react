import { Button, SimpleGrid, Stack, type BoxProps } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useId } from "@mantine/hooks";
import { Form } from "@naplaca/mantine-form";
import { zod4Resolver } from "mantine-form-zod-resolver";
import { RegisterRequest } from "../schema";

interface RegisterFormProps extends Omit<BoxProps, "children"> {
  onSuccess?: () => void;
}

export function RegisterForm({ onSuccess, ...props }: RegisterFormProps) {
  const formId = useId();
  const form = useForm({
    validate: zod4Resolver(RegisterRequest),
    initialValues: {
      email: "john.doe@example.com",
      password: "123456789",
      confirmPassword: "123456789",
    },
  });

  const handleSubmit = form.onSubmit((variables) => {
    console.log({ variables });
  });

  return (
    <Form form={form} id={formId} onSubmit={handleSubmit} {...props}>
      <Stack>
        <SimpleGrid cols={{ base: 1, md: 2 }}>
          <Form.TextInput name="firstName" label="First name" required />
          <Form.TextInput name="lastName" label="Last name" required />
        </SimpleGrid>
        <Form.TextInput name="email" label="Email" type="email" required />
        <Form.PasswordInput name="password" label="Password" required />
        <Form.PasswordInput name="confirmPassword" label="Confirm Password" required />

        <Button type="submit" form={formId}>
          Create account
        </Button>
      </Stack>
    </Form>
  );
}
