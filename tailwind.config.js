/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FCF9F2',
          100: '#F7F0DF',
          200: '#EDDCB8',
          300: '#DFC48D',
          400: '#D4AF37',
          500: '#C5A059',
          600: '#A48039',
          700: '#836324',
          800: '#634919',
          900: '#473310',
        },
        sand: {
          50: '#FAF8F5',
          100: '#F4EFEB',
          200: '#E9E2DA',
          300: '#DDD3C7',
          500: '#8E867B',
          700: '#524C44',
          900: '#22201D',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['Cinzel', 'serif'],
        italiana: ['Italiana', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Outfit', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
      letterSpacing: {
        'luxury': '0.35em',
        'wide-luxury': '0.22em',
      },
      boxShadow: {
        'luxury-card': '0 10px 40px -10px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.03)',
        'luxury-hover': '0 20px 50px -10px rgba(197, 160, 89, 0.15), 0 2px 8px rgba(0, 0, 0, 0.05)',
        'gold-glow-soft': '0 0 30px rgba(197, 160, 89, 0.2)',
      }
    },
  },
  plugins: [],
}
