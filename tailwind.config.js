/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
   './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        mainBgColor: '#f9fafb',
        sidebarBgColor : '#2E2E2E',
        userinfoBgColor : '#3E3F41',
        userInfoTextColor : '#8C8F94',
        TapMenuUnChoiseColor : '#8C8F94'
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
