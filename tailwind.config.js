/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'slide-in-from-bottom-4': 'slideInFromBottom 0.3s ease-out'
      },
      keyframes: {
        slideInFromBottom: {
          from: {
            opacity: '0',
            transform: 'translateY(1rem)'
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)'
          }
        }
      }
    }
  },
  plugins: []
}

