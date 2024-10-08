/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1574c0',
        secondary: '#17a8e5',
      },
      width: {
        max: 'max-w-1970px',
      },
    },
  },
  plugins: [],
};
