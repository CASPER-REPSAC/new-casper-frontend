/** @type {import('tailwindcss').Config} */
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
      gary: {
        50: '#cad4de',
        100: '#b1bac4',
        200: '#929daa',
        300: '#78838f',
        400: '#646e7a',
        500: '#565d67',
        600: '#454c55',
        700: '#383e46',
        800: '#2e333a',
        850: '#282d33',
        900: '#22262d',
        950: '#0f0f0f',
      },
      green: {
        50: '#cbd4df',
        100: '#a0d994',
        200: '#80c276',
        300: '#6ca963',
        400: '#5b9352',
        500: '#487b41',
        600: '#3d6937',
        700: '#32572e',
        800: '#274625',
        900: '#1a331a',
      },
      red: {
        50: '#f9dbd6',
        100: '#f4bbb2',
        200: '#f0998f',
        300: '#e4786d',
        400: '#d45d52',
        500: '#ba463e',
        600: '#9f3831',
        700: '#862d28',
        800: '#6e221f',
        900: '#551715',
      },
      purple: {
        600: '#6546b5',
        700: '#54389c',
        800: '#432d7d',
        900: '#33225d',
      },
    },
    extend: {},
  },
  plugins: [],
};
