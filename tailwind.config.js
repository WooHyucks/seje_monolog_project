/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
   './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
      },
      maxWidth: {
        '900': '900px',
      },
    },
    screens: {
      md: { max: '980px' },
    },
  },
  plugins: [],
}
