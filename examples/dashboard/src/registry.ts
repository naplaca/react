import { Registry } from "@naplaca/mantine-components/registry";
import { Link } from "@tanstack/react-router";
import { usePathname } from "./hooks/use-pathname";

const registry = Registry.getInstance();

registry.registerComponent("RouterLink", Link);
registry.registerHook("usePathname", usePathname);
