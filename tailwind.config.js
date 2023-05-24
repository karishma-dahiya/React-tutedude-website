/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#800080',
        'lgray':'#4d4d4d'
      },
      boxShadow: {
        'med': '0px 2px 8px rgba(128, 0, 128, 0.15)',
        'sm':'0px 3px 100px rgba(0, 0, 0, 0.1)'
      },
      screens: {
        'sm':{'min':'400px','max':'900px'}
      }
    },
  },
  plugins: [],
}
