import { configReactPackage } from "@naplaca/eslint-config";
import { tanstackConfig } from "@tanstack/eslint-config";

export default configReactPackage(...tanstackConfig, {
  parserOptions: {
    tsconfigRootDir: import.meta.dirname,
  },
});
