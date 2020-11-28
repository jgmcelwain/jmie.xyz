const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'media',
  purge: {
    content: ['./public/index.html', './src/**/*.js'],
  },
  theme: {
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      spacing: {
        0.25: '0.0625rem',
        0.75: '0.1875rem',
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      scale: ['group-hover'],
      translate: ['group-hover'],
    },
  },
};
