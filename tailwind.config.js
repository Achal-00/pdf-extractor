/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // screens: {
      //   portrait: { raw: "(max-aspect-ratio: 3/2)" },
      //   landscape: { raw: "(min-aspect-ratio: 3/2)" },
      // },
      fontFamily: {
        "custom-font-family": ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
