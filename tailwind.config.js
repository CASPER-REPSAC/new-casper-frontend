/** @type {import('tailwindcss').Config} */

import COLOR from './app/_styles/colors';

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#ffffff',
      black: '#000000',
      gray: {
        50: COLOR.gray50,
        100: COLOR.gray100,
        200: COLOR.gray200,
        300: COLOR.gray300,
        400: COLOR.gray400,
        500: COLOR.gray500,
        600: COLOR.gray600,
        700: COLOR.gray700,
        800: COLOR.gray800,
        850: COLOR.gray850,
        900: COLOR.gray900,
        950: COLOR.gray950,
      },
      green: {
        50: COLOR.green50,
        100: COLOR.green100,
        200: COLOR.green200,
        300: COLOR.green300,
        400: COLOR.green400,
        500: COLOR.green500,
        600: COLOR.green600,
        700: COLOR.green700,
        800: COLOR.green800,
        900: COLOR.green900,
      },
      red: {
        50: COLOR.red50,
        100: COLOR.red100,
        200: COLOR.red200,
        300: COLOR.red300,
        400: COLOR.red400,
        500: COLOR.red500,
        600: COLOR.red600,
        700: COLOR.red700,
        800: COLOR.red800,
        900: COLOR.red900,
      },
      purple: {
        600: COLOR.purple600,
        700: COLOR.purple700,
        800: COLOR.purple800,
        900: COLOR.purple900,
      },

      text: {
        light: {
          default: COLOR.white,
          week: COLOR.gray100,
          strong: COLOR.white,
        },
      },

      border: {
        light: {
          default: COLOR.gray50,
          bold: COLOR.gray300,
        },
      },
    },
    extend: {
      zIndex: {
        header: '9008',
        detailCardBg: '-1001',
        memberCardCover: '-1002',
        options: '1001',
        pageShadow: '9001',
        header: '9000',
        popup: '9010',
        hambergerMenu: '9020',
      },
    },
  },
  plugins: [],
};
