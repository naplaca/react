import type { FC } from "react";
import { usePathname } from "./hooks/use-pathname";
import { RouterLink, type RouterLinkProps } from "./router-link";

interface RegistryHooks {
  usePathname: typeof usePathname;
}

interface RegistryComponents {
  RouterLink: RouterLinkProps;
}

export class Registry {
  private static instance?: Registry;

  private components: { [key in keyof RegistryComponents]: FC<RegistryComponents[key]> } = {
    RouterLink,
  };

  private hooks: { [key in keyof RegistryHooks]: RegistryHooks[key] } = {
    usePathname,
  };

  private constructor() {}

  public static getInstance(): Registry {
    if (!Registry.instance) {
      Registry.instance = new Registry();
    }

    return Registry.instance;
  }

  registerComponent<T extends keyof RegistryComponents>(name: T, component: FC<RegistryComponents[T]>) {
    this.components[name] = component;
  }

  getComponent(name: keyof RegistryComponents) {
    return this.components[name];
  }

  registerHook<T extends keyof RegistryHooks>(name: T, hook: RegistryHooks[T]) {
    this.hooks[name] = hook;
  }

  getHook(name: keyof RegistryHooks) {
    return this.hooks[name];
  }
}
