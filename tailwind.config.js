/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        beige: "#E9E2D6",
        cream: "#F7F5F0",
        sage: "#A3B09E",
        sagedeep: "#66745F",
        charcoal: "#292925",
        softgray: "#E8E8E5",
        gray: "#E8E8E5",
        line: "#D9D5CB",
        muted: "#6B6A62",
      },
      fontFamily: {
        display: ['"Instrument Serif"', "Georgia", "serif"],
        sans: ['"Hanken Grotesk"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
