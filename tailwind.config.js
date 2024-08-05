/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      lineHeight: {
        80: "80px"
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

