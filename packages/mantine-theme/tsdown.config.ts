import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["./src/index.ts"],
  platform: "browser",
  target: "esnext",
  dts: true,
  copy: [{ from: "./src/theme.css", to: "./dist/theme.css" }],
  inputOptions: {
    jsx: "react-jsx",
  },
});
