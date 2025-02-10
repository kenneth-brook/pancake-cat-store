/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",   // Only scan source files
    "!./src/gatsby-types.d.ts",     // Exclude Typegen file
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

