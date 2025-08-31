import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/resources/")({
  beforeLoad: () => {
    throw redirect({ to: "/resources/customers" });
  },
});
