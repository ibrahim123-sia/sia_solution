/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: '#241F1B',
          light: '#2E2822',
          soft: '#3A332C',
        },
        amber: {
          DEFAULT: '#C2662F',
          dark: '#A6531F',
          light: '#D98A5E',
        },
        cream: {
          DEFAULT: '#FBF6EF',
          dim: '#F3EBDD',
          line: '#E7DCC9',
        },
      },
      fontFamily: {
        display: ['Poppins', 'sans-serif'],
        body: ['Montserrat', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}