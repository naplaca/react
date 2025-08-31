import { createSafeContext } from "@naplaca/react-core";
import { useCallback, useState, type ReactNode } from "react";
import type { User } from "../schema";

export interface AuthContextValues {
  isAuthenticated: boolean;
  user: User | null;
  hasPermission: (permission: string) => boolean;
  login: (credentials: { email: string; password: string }) => Promise<void>;
  logout: () => Promise<void>;
}

const [Provider, useAuth] = createSafeContext<AuthContextValues>();

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  const login = useCallback(async (credentials: { email: string; password: string }) => {
    console.log(credentials);
  }, []);

  const logout = useCallback(async () => {
    setIsAuthenticated(false);
    setUser(null);
  }, []);

  const hasPermission = useCallback((_permission: string) => {
    // Implement your permission logic here
    return true;
  }, []);

  return (
    <Provider
      value={{
        isAuthenticated,
        login,
        logout,
        hasPermission,
        user,
      }}
    >
      {children}
    </Provider>
  );
}

export { useAuth };
