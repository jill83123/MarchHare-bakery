/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    container: {
      center: true,
      padding: '.75rem',
    },
    extend: {
      fontFamily: {
        sans: ['Noto Sans TC', ...defaultTheme.fontFamily.sans],
        'noto-serif': ['Noto Serif TC', 'serif'],
        maru: ['Zen Maru Gothic', 'sans'],
        chenyuluoyan: ['chenyuluoyan', 'sans'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        cream: '#F6E7C9',
        black: {
          light: '#525252',
          DEFAULT: '#303030',
        },
        cerulean: '#859FAF',
        danger: '#E76565',
        success: '#A1BE84',
        warning: '#FFE486',
        info: '#9AB8DC',
        brown: {
          100: '#ebcbad',
          300: '#D4A373',
          500: '#b07d62',
        },
      },
    },
  },
  plugins: ['tw-elements/dist/plugin.cjs'],
};
