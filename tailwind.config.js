/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'mobile': { 'max': '767px' },
        'tablet': { 'min': '768px', 'max': '991px' },
        'laptop': { 'min': '992px', 'max': '1199px' },
        'desktop': { 'min': '1200px' },
        // Custom minimum query helpers for cleaner responsive stacking
        'lg-tablet': '768px', // >= 768px
        'lg-laptop': '992px',  // >= 992px
        'lg-desktop': '1200px', // >= 1200px
      },
      colors: {
        brandYellow: '#F1D65C',
        brandBlue: '#1E6EEB',
        brandOrange: '#F47C08',
        brandGreen: '#15D08A',
        brandPurple: '#A95CFF',
        brandCyan: '#00D9FF',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        // Neo-brutalist flat borders
        neo: '6px 6px 0px 0px rgba(0, 0, 0, 1)',
        'neo-lg': '8px 8px 0px 0px rgba(0, 0, 0, 1)',
        'neo-sm': '4px 4px 0px 0px rgba(0, 0, 0, 1)',
        'neo-cyan': '0px 4px 0px 0px #00D9FF',
        'neo-cyan-lg': '0px 6px 0px 0px #00D9FF',
      },
      borderWidth: {
        '3': '3px',
      }
    },
  },
  plugins: [],
}
