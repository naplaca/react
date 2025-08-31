import { Devtools } from "#/components/devtools";
import type { RouteContext } from "#/contexts/route.context";
import { BreadcrumbsProvider } from "#/providers/breadcrumbs.provider";
import { createRootRouteWithContext, Outlet, Scripts } from "@tanstack/react-router";

export const Route = createRootRouteWithContext<RouteContext>()({
  component: Root,
});

function Root() {
  return (
    <>
      <BreadcrumbsProvider>
        <Outlet />
      </BreadcrumbsProvider>
      <Devtools />
      <Scripts />
    </>
  );
}
