import { AuthLayout } from "#/layouts/auth.layout";
import { createFileRoute, redirect } from "@tanstack/react-router";
import { z } from "zod";

export const Route = createFileRoute("/_guest")({
  component: AuthLayout,
  validateSearch: z.object({ redirect: z.string().optional() }),
  beforeLoad: ({ context, search }) => {
    if (context.auth.isAuthenticated) {
      throw redirect({ to: search.redirect ?? "/users" });
    }

    return context.auth;
  },
});
