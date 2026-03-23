import { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const preset: Config = {
  content: [],
  plugins: [animate],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--color-primary)",
          hover: "var(--color-primary-hover)",
          pale: "var(--color-primary-pale)",
        },
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        surface: "var(--color-surface)",
        border: "var(--color-border)",
        muted: "var(--color-muted)",
        success: "var(--color-success)",
        warning: "var(--color-warning)",
        destructive: "var(--color-destructive)",
      },
      borderRadius: {
        DEFAULT: "var(--radius-md)",
      },
    },
  },
};

export default preset;
