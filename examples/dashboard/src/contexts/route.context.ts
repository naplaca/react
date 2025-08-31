import type { BreadcrumbsContextValues } from "#/providers/breadcrumbs.provider";
import type { api } from "#/resources/api";
import type { AuthContextValues } from "#/resources/auth/providers/auth.provider";

export interface RouteContext {
  queryClient: ReturnType<typeof api.useQueryClient>;
  auth: AuthContextValues;
  setBreadcrumbs: BreadcrumbsContextValues["setBreadcrumbs"];
}
