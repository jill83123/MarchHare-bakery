/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        sans: ['Noto Sans TC', ...defaultTheme.fontFamily.sans],
        maru: ['Zen Maru Gothic', 'sans'],
        chenyuluoyan: ['chenyuluoyan', 'sans'],
      },
      colors: {
        cream: '#F6E7C9',
        oak: '#956C4C',
        black: {
          light: '#525252',
          DEFAULT: '#303030',
        },
        cerulean: '#859FAF',
        danger: '#E76565',
      },
    },
  },
  plugins: ['tw-elements/dist/plugin.cjs'],
};
