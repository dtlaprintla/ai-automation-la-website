import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          primary: "#EE4F27", // N8N Orange
          secondary: "#D63C1A", // Orange hover state
          accent: "#4A9EFF", // Blue accent
          gradient: {
            from: "rgba(238, 79, 39, 0.8)", // Orange start
            via: "rgba(214, 60, 26, 0.7)", // Orange middle
            to: "rgba(74, 158, 255, 0.6)"   // Blue end
          }
        },
        // N8N-inspired dark theme colors
        n8n: {
          bg: {
            primary: "#0E0918",    // Deep navy background
            secondary: "#1A1B26",  // Slightly lighter for cards
            tertiary: "#242530",   // Inputs/elevated elements
            accent: "#2A2D3E",     // Hover states
          },
          text: {
            primary: "#FFFFFF",    // Pure white for headings
            secondary: "#C4BBD3",  // Lavender gray for body text
            muted: "#9B96A6",      // Muted text
            disabled: "#6B6B7D",   // Disabled states
          },
          accent: {
            orange: "#EE4F27",     // N8N's signature orange
            purple: "#6B21EF",     // Purple accent
            blue: "#4A9EFF",       // Blue accent
          },
          border: "rgba(196, 187, 211, 0.1)",
          "border-hover": "rgba(196, 187, 211, 0.2)",
        },
        gray: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827"
        }
      },
      // Removed all gradient definitions - using solid Vapi colors only
      backgroundImage: {},
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-in": "slideIn 0.5s ease-out",
        "bounce-subtle": "bounceSubtle 2s infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite alternate",
        "float": "float 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideIn: {
          "0%": { transform: "translateX(-20px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        bounceSubtle: {
          "0%, 100%": { transform: "translateY(-5%)" },
          "50%": { transform: "translateY(0)" },
        },
        pulseGlow: {
          "0%": { boxShadow: "0 0 20px rgba(99, 102, 241, 0.4)" },
          "100%": { boxShadow: "0 0 40px rgba(99, 102, 241, 0.8)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      boxShadow: {
        "glow": "0 0 20px rgba(99, 102, 241, 0.3)",
        "glow-lg": "0 0 40px rgba(99, 102, 241, 0.4)",
        "card": "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        "card-hover": "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;