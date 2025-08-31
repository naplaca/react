import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["./src/**/*.ts", "./src/**/*.tsx"],
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
