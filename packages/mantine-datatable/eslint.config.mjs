import { configReactPackage } from "@naplaca/eslint-config";

export default configReactPackage({
  ignores: ["dist/**"],
  languageOptions: {
    parserOptions: {
      projectService: true,
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
