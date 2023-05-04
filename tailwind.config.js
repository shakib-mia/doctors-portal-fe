/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontSize: {
      'heading-1': '48px',
      'heading-2': '36px',
      'heading-3': '22px',
      'heading-4': '20px',
      'heading-5': '18px',
      'normal': '16px'
    },
    colors: {
      primary: {
        DEFAULT: '#0FCFEC',
        50: '#ECFEFF',
        100: '#CEFBFF',
        200: '#A4F4FD',
        300: '#65EAFB',
        400: '#0FCFEC',
        500: '#03B8D7',
        600: '#0692B4',
        700: '#0C7592',
        800: '#145F76',
        900: '#154E64',
      },
      secondary: {
        DEFAULT: '#19D3AE',
        50: '#EFFEFA',
        100: '#C7FFF0',
        200: '#90FFE2',
        300: '#50F8D1',
        400: '#19D3AE',
        500: '#04C8A4',
        600: '#00A187',
        700: '#05806D',
        800: '#0A6558',
        900: '#0D544A',
      },
      dark: {
        DEFAULT: '#3A4256',
        50: '#F6F7F9',
        100: '#ECEEF2',
        200: '#D4D9E3',
        300: '#AFB7CA',
        400: '#8391AD',
        500: '#647393',
        600: '#4F5B7A',
        700: '#414B63',
        800: '#3A4256',
        900: '#323848',
      },
      white: '#fff'
    }
  },
  plugins: [],
}