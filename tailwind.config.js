const defaultTheme = require('tailwindcss/defaultTheme');
const iOSHeight = require('@rvxlab/tailwind-plugin-ios-full-height');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [iOSHeight],
};
