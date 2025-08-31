import { Button, Stack, type BoxProps } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useId } from "@mantine/hooks";
import { Form } from "@naplaca/mantine-form";
import { zod4Resolver } from "mantine-form-zod-resolver";
import { ForgotPasswordRequest } from "../schema";

interface ForgotPasswordFormProps extends Omit<BoxProps, "children"> {
  onSuccess?: () => void;
}

export function ForgotPasswordForm({ onSuccess, ...props }: ForgotPasswordFormProps) {
  const formId = useId();
  const form = useForm({
    validate: zod4Resolver(ForgotPasswordRequest),
    initialValues: {
      email: "john.doe@example.com",
    },
  });

  const handleSubmit = form.onSubmit((variables) => {
    console.log({ variables });
  });

  return (
    <Form form={form} id={formId} onSubmit={handleSubmit} {...props}>
      <Stack>
        <Form.TextInput name="email" label="Email" type="email" required />
        <Button type="submit" form={formId}>
          Reset password
        </Button>
      </Stack>
    </Form>
  );
}
