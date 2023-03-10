/* A guide to configuring and customizing your Tailwind installation.:
    https://tailwindcss.com/docs/configuration
  + As well as: https://tailwindcss.com/docs/customizing-colors (Tailwind CSS)
  + And: https://tailwindcss.com/docs/screens
*/

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '440px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1680px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        primary: "#ff4800",
        blue: {
          450: '#5F99F7'
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
}