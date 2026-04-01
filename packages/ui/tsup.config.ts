import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  splitting: false,
  clean: true,
  external: [
    "react",
    "react-dom",
    "@radix-ui/*",
    "lucide-react",
    "@repo/utils",
  ],
  banner: {
    js: "'use client';",
  },
});
