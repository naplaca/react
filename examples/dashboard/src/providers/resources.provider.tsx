import { api } from "#/resources/api";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { ReactNode } from "react";

export const queryClient = new QueryClient();

interface ResourcesProviderProps {
  children: ReactNode;
}

export function ResourcesProvider({ children }: ResourcesProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <api.ReactQueryProvider>{children}</api.ReactQueryProvider>
    </QueryClientProvider>
  );
}
