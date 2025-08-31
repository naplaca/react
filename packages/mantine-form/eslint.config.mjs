import { configReactPackage } from "@naplaca/eslint-config";

export default configReactPackage({
  languageOptions: {
    parserOptions: {
      projectService: true,
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
