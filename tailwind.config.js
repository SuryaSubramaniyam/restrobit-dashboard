/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          500: '#f97316', // orange used in reference
        }
      },
      borderRadius: {
        xl: '1rem'
      }
    },
  },
  plugins: [],
}
