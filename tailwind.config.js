/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#060709',
          900: '#0B0D11',
          850: '#101318',
          800: '#161922',
          700: '#232836',
        },
        gold: {
          100: '#FDF7E7',
          200: '#F7E7B8',
          300: '#EED385',
          400: '#E1BC55',
          500: '#C99E2D',
          600: '#A47F1D',
          700: '#7E5F13',
        },
        champagne: {
          DEFAULT: '#E6D7C3',
          light: '#F5EFEB',
          dark: '#B8A48D',
        },
        titanium: {
          50: '#F4F5F7',
          100: '#E2E5E9',
          300: '#9EA7B4',
          500: '#647082',
          700: '#343B48',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        display: ['Cinzel', 'Cinzel Decorative', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        'widest-plus': '0.25em',
        'luxury': '0.35em',
      },
      boxShadow: {
        'gold-glow': '0 0 35px -5px rgba(225, 188, 85, 0.25)',
        'gold-subtle': '0 0 15px 0px rgba(225, 188, 85, 0.15)',
        'dark-glass': '0 20px 50px rgba(0, 0, 0, 0.6)',
      },
      backgroundImage: {
        'radial-vignette': 'radial-gradient(circle at center, transparent 30%, rgba(6, 7, 9, 0.85) 100%)',
        'gold-gradient': 'linear-gradient(135deg, #F7E7B8 0%, #E1BC55 50%, #A47F1D 100%)',
        'titanium-gradient': 'linear-gradient(135deg, #FFFFFF 0%, #C4CBD6 50%, #6E7989 100%)',
        'card-glass': 'linear-gradient(145deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.01) 100%)',
      }
    },
  },
  plugins: [],
}
