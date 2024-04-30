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
        NavShadow : '#DEDFDF',
        tapMenuUnChoiseColor : '#8C8F94',
        scoreBgColor: '#eaf3f9',
        scoreDataColor: '#5550FF',
        worstChartColor : '#F65959',
        dountChartText : '#DEDFDF',
        topChartRealColor : '#FF9B3F',
        bottomChartBadColor : '#f659598c',
        bottomChartGoddColor : '#4ECAFF'
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
