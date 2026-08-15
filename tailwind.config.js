/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        studio: {
          950: '#F7F7F5', // Primary Light Neutral background
          900: '#F0F0EE', // Secondary Light Neutral background
          850: '#E5E5E2', // Hairline divider / border
          800: '#D5D5D0', // Input / Card border
          700: '#8E8E8A',
          600: '#666666', // Secondary text
          400: '#5F5C57', // Secondary dark text
          300: '#3F3F3F', // Body text
          200: '#292929', // Secondary dark
          100: '#171717', // Deep Black / Charcoal primary text
          50:  '#0F0F0F',
        },
        gold: {
          300: '#171717',
          400: '#171717',
          500: '#171717',
          600: '#171717',
          700: '#171717',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Manrope', '-apple-system', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Manrope', '-apple-system', 'sans-serif'],
        mono: ['Manrope', 'monospace'],
      },
      letterSpacing: {
        heading: '-0.035em',
        subheading: '-0.015em',
        body: '0em',
        label: '0.08em',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
