import { Devtools } from "#/components/devtools";
import { ThemeProvider } from "#/providers/theme.provider";
import { Outlet, Scripts, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: Root,
});

function Root() {
  return (
    <>
      <ThemeProvider>
        <Outlet />
      </ThemeProvider>
      <Devtools />
      <Scripts />
    </>
  );
}
