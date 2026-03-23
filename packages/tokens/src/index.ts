export const colors = { 
  amber: {
    DEFAULT: "#c97d2e",
    light: "#e8a44a",
    pale: "#f5deb3",
  },
  ink: {
    DEFAULT: "#0e0c0a",
    soft: "#2a2520",
  },
  paper: "#f5f0e8",
  stone: "#8a8075",
  sage: "#4a6741",
  rust: "#b84c2a",
} as const;

export const spacing = { 
  1: "0.25rem", 
  2: "0.5rem", 
  4: "1rem", 
  6: "1.5rem", 
  8: "2rem", 
} as const;

export const radius = { 
  sm: "0.25rem", 
  md: "0.375rem", 
  lg: "0.5rem", 
  full: "9999px", 
} as const;

export const typography = { 
  fontFamily: { 
    sans: ["Inter", "system-ui", "sans-serif"], 
    mono: ["JetBrains Mono", "monospace"], 
  }, 
  fontSize: { 
    xs: "0.75rem", 
    sm: "0.875rem", 
    base: "1rem", 
    lg: "1.125rem", 
    xl: "1.25rem", 
    "2xl": "1.5rem", 
    "3xl": "1.875rem", 
  }, 
  fontWeight: { 
    normal: "400", 
    medium: "500", 
    semibold: "600", 
    bold: "700", 
  } 
} as const;

export const shadows = { 
  sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)", 
  md: "0 4px 6px -1px rgb(0 0 0 / 0.1)", 
  lg: "0 10px 15px -3px rgb(0 0 0 / 0.1)", 
} as const;
