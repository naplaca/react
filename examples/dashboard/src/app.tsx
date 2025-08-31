import { messages as pt } from "#/locales/pt.ts";
import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";
import { messages as en } from "./locales/en.ts";
import { ResourcesProvider } from "./providers/resources.provider.tsx";
import { RouterProvider } from "./providers/router.provider.tsx";
import { ThemeProvider } from "./providers/theme.provider.tsx";
import { AuthProvider } from "./resources/auth/providers/auth.provider.tsx";

import "./registry.ts";
import "./styles.css";

i18n.load({ en, pt });
i18n.activate("en");

export function App() {
  return (
    <ResourcesProvider>
      <I18nProvider i18n={i18n}>
        <AuthProvider>
          <ThemeProvider>
            <RouterProvider />
          </ThemeProvider>
        </AuthProvider>
      </I18nProvider>
    </ResourcesProvider>
  );
}
