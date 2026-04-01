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
          glow: "var(--color-primary-glow)",
        },
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        surface: {
          DEFAULT: "var(--color-surface)",
          hover: "var(--color-surface-hover)",
          elevated: "var(--color-surface-elevated)",
        },
        border: {
          DEFAULT: "var(--color-border)",
          hover: "var(--color-border-hover)",
        },
        muted: {
          DEFAULT: "var(--color-muted)",
          foreground: "var(--color-muted-foreground)",
        },
        success: {
          DEFAULT: "var(--color-success)",
          pale: "var(--color-success-pale)",
        },
        warning: {
          DEFAULT: "var(--color-warning)",
          pale: "var(--color-warning-pale)",
        },
        destructive: {
          DEFAULT: "var(--color-destructive)",
          pale: "var(--color-destructive-pale)",
        },
        info: {
          DEFAULT: "var(--color-info)",
          pale: "var(--color-info-pale)",
        },
        ring: "var(--color-ring)",
      },
      borderRadius: {
        DEFAULT: "var(--radius-md)",
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        glow: "var(--shadow-glow)",
      },
      transitionDuration: {
        fast: "150ms",
        base: "200ms",
        slow: "300ms",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
    },
  },
};

export default preset;
