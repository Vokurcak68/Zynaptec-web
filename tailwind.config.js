
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        aetherionPurple: "#B381FF"
      },
      fontFamily: {
        sans: ["Sora", "sans-serif"],
        display: ["Orbitron", "sans-serif"]
      }
    },
  },
  plugins: [],
}
