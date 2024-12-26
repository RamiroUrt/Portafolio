/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  "darkMode": 'class',
  theme: {
    colors:{
      '--light-gray': '#555555',
      '--light-black' : '#000000',
      '--light-white': '#fff',
      '--light-gray--': '#B5B5B5',
      '--light-black--': '#1A1A1A',
      '--light-border':'#353535',
      '--font-light': '#686868',
      '--font-black': '#202020',
  
      '--font-color-dark': '#323232',
      '--font-color-light': '#FFFFFF',
      '--bg-color': '#FFFFFF',
      '--main-color': '#323232',
      '--secondary-color': '#505050',

      'jr-card-1': '#27272A',
      'jr-card-2': '#404040',
      'jr-text': '#F59E0B',
    },
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  variants: {
  },
  // eslint-disable-next-line no-undef
  plugins: [require("tailwindcss-animate")],

}