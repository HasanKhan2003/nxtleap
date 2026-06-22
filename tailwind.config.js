/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Custom nxtleap colors
        "deep-navy": "#0B1120",
        "navy-mid": "#111827",
        "blue-primary": "#2563EB",
        "blue-hover": "#1D4ED8",
        "cyan-accent": "#06B6D4",
        "off-white": "#F8FAFC",
        "slate-100-custom": "#F1F5F9",
      },
      fontFamily: {
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 6px)",
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        "card": "0 4px 24px rgba(0, 0, 0, 0.08)",
        "card-dark": "0 4px 32px rgba(0, 0, 0, 0.3)",
        "glow-blue": "0 0 40px rgba(37, 99, 235, 0.2)",
        "glow-cyan": "0 0 40px rgba(6, 182, 212, 0.15)",
        "glow-blue-lg": "0 8px 30px rgba(37, 99, 235, 0.35)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
        "mesh-move-1": {
          "0%": { transform: "translate(-10%, -10%) scale(1)" },
          "50%": { transform: "translate(30%, 20%) scale(1.3)" },
          "100%": { transform: "translate(10%, 60%) scale(1)" },
        },
        "mesh-move-2": {
          "0%": { transform: "translate(80%, 10%) scale(1.2)" },
          "50%": { transform: "translate(40%, 50%) scale(1)" },
          "100%": { transform: "translate(70%, 80%) scale(1.3)" },
        },
        "mesh-move-3": {
          "0%": { transform: "translate(50%, 80%) scale(1)" },
          "50%": { transform: "translate(20%, 30%) scale(1.4)" },
          "100%": { transform: "translate(60%, 10%) scale(1)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "bounce-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        "mesh-1": "mesh-move-1 12s ease-in-out infinite alternate",
        "mesh-2": "mesh-move-2 15s ease-in-out infinite alternate",
        "mesh-3": "mesh-move-3 18s ease-in-out infinite alternate",
        "float": "float 4s ease-in-out infinite alternate",
        "bounce-slow": "bounce-slow 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
