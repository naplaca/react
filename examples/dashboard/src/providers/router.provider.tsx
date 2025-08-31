import { api } from "#/resources/api";
import { useAuth } from "#/resources/auth/providers/auth.provider";
import { routeTree } from "#/route-tree.gen";
import { RouterProvider as TanstackRouterProvider, createRouter } from "@tanstack/react-router";

// Create a new router instance
const router = createRouter({
  routeTree,
  context: {
    queryClient: undefined!,
    auth: undefined!,
    setBreadcrumbs: undefined!,
  },
  defaultPreload: "intent",
  scrollRestoration: true,
  defaultStructuralSharing: true,
  // Since we're using React Query, we don't want loader calls to ever be stale
  // This will ensure that the loader is always called when the route is preloaded or visited
  defaultPreloadStaleTime: 0,
});

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export function RouterProvider() {
  const auth = useAuth();
  const queryClient = api.useQueryClient();
  return <TanstackRouterProvider router={router} context={{ auth, queryClient }} />;
}
