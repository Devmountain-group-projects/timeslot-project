import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './src/assets/styles/custom.css', // Add this line to include your custom CSS
  ],
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
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        '.btn-blue': {
          '@apply px-4 py-2 text-base rounded-full font-medium text-white bg-primary hover:bg-white hover:text-primary hover:ring-2 ring-primary transition duration-300 ease-in-out':
            {},
        },
      });
    }),
  ],
};
