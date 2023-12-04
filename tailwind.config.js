/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
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
        loadingBar: '9090',
      },
      keyframes: {
        slide: {
          '0%': { left: '0' },
          '100%': { left: '150vw', display: 'none' },
        },
      },
      animation: {
        slide: 'slide 1s ease',
      },
    },
  },
  plugins: [],
};
