import type { Config } from "tailwindcss";
import preset from "@repo/tokens/tailwind-preset";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  presets: [preset],
  darkMode: "class",
};

export default config;
