import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-varela-round)'],
      },
      colors: {
        primary: '#9044fc',    // Blue-600
        accent: '#faf6ff',     // Blue-500
        dark: {
          DEFAULT: '#111827', // Gray-900
          light: '#1f2937'    // Gray-800
        }
      },
      animation: {
        'fade-in': 'fadeIn 3s ease-in',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
