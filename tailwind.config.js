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
        primary: '#007dfe',
        secondary: '#2264ba',
        tertiary: '#EFF2F8',
      },
      width: {
        max: 'max-w-[1800px]',
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        '.btn-blue': {
          '@apply px-6 py-3 text-base rounded-full font-medium text-white bg-secondary hover:bg-white hover:text-primary hover:ring-2 ring-primary transition duration-300 ease-in-out':
            {},
        },
        '.btn-blue-dashboard': {
          '@apply px-4 py-2 text-sm rounded-full font-medium text-white bg-secondary hover:bg-white hover:text-primary hover:ring-2 ring-primary transition duration-300 ease-in-out':
            {},
        },
        '.bg-gradient-gray': {
          '@apply bg-[#ededed]': {},
        },
        '.title-text': {
          '@apply text-gray-800 sm:text-3xl text-2xl font-extrabold mb-10': {},
        },
        '.max-width': {
          '@apply max-w-[1800px]': {},
        },
      });
    }),
  ],
};
