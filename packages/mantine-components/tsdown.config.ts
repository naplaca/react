import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["./src/index.ts", "./src/**/*.ts", "./src/**/*.tsx", "./src/theme.css"],
  platform: "browser",
  target: "esnext",
  dts: true,
  exports: {
    devExports: true,
  },
  inputOptions: {
    jsx: "react-jsx",
  },
});
