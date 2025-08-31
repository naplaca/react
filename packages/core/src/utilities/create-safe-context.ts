import { createContext, useContext } from "react";
import { assert } from "./assert";

export function createSafeContext<T>(defaultValue?: T, name = "") {
  const context = createContext<T | undefined>(defaultValue);

  const useSafeContext = () => {
    const value = useContext(context);
    assert(value, `[${name}] useContext must be used within a Provider`);
    return value;
  };

  return [context.Provider, useSafeContext] as const;
}
