import type { Config } from "tailwindcss";
import preset from "@repo/tokens/tailwind-preset";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  presets: [preset],
  darkMode: "class",
};

export default config;
