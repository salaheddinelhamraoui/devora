/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./content/**/*.mdx",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#FBF8F3",
          50: "#FEFDFB",
          100: "#FBF8F3",
          200: "#F4EEE4",
          300: "#E9E0D2",
        },
        ink: {
          DEFAULT: "#17130F",
          muted: "#6B615A",
          soft: "#938981",
        },
        brand: {
          50: "#F1EEFF",
          100: "#E4DEFF",
          200: "#CBC0FF",
          300: "#AC9BFF",
          400: "#8A72FB",
          500: "#6A4FF0",
          600: "#5638D8",
          700: "#442BAC",
          800: "#33217F",
          900: "#231757",
        },
        pastel: {
          rose: "#FBE0E7",
          butter: "#FDEFC3",
          mint: "#D8F0E3",
          sky: "#DCEAFB",
          lilac: "#E9E2FB",
          peach: "#FBE3D3",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.75rem",
      },
      boxShadow: {
        soft: "0 2px 8px -2px rgba(23,19,15,0.06), 0 12px 32px -12px rgba(23,19,15,0.10)",
        lift: "0 8px 20px -6px rgba(23,19,15,0.10), 0 24px 48px -20px rgba(23,19,15,0.18)",
        ring: "0 0 0 1px rgba(23,19,15,0.06)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: 0, transform: "translateY(14px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.22,1,0.36,1) both",
        marquee: "marquee 32s linear infinite",
      },
      maxWidth: {
        "8xl": "88rem",
      },
      opacity: {
        8: "0.08",
        12: "0.12",
        15: "0.15",
      },
    },
  },
  plugins: [],
};
