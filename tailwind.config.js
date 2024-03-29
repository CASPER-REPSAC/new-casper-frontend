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
        memberCardCover: '-1091',
        detailCardBg: '-1090',
        highlight: '-1010',
        options: '1001',
        pageShadow: '9001',
        header: '9000',
        header: '9008',
        popup: '9010',
        hambergerMenu: '9020',
        loadingBar: '9090',
      },
    },
  },
  plugins: [],
};
