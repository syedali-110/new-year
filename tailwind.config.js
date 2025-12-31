/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        typewriter: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        blink: {
          "0%, 100%": { borderColor: "transparent" },
          "50%": { borderColor: "#ec4899" },
        },
      },
      animation: {
        typewriter:
          "typewriter 10s steps(40, end) infinite, blink 0.75s step-end infinite",
      },
    },
  },
  plugins: [],
};

