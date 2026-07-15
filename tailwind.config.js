/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Dynamic override of tailwind built-in orange classes to Gold
        orange: {
          50: '#FDFBF7',
          100: '#F7F3E1',
          200: '#EFE7C3',
          300: '#E3D39B',
          400: '#D5BC6E',
          500: '#D4AF37', // Old Classic Gold
          600: '#C29D2C', // Dark Gold
          700: '#A38120',
          800: '#7F6418',
          900: '#5F4A11',
          950: '#43340A',
        },
        // Dynamic override of tailwind built-in slate classes to Deep Navy
        slate: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#172547', // Midnight Blue-Gray
          900: '#0F1E36', // Oxford Navy Blue
          950: '#070F1E', // Midnight Navy Blue
        },
        'corp-orange': {
          DEFAULT: '#D4AF37', // Gold
          dark: '#C29D2C',
          light: '#F7F3E1',
        },
        'corp-teal': {
          DEFAULT: '#0F1E36', // Navy Blue
          dark: '#070F1E',
          light: '#F1F5F9',
        },
        'corp-dark': '#0F1E36', // Navy
        'corp-gray': '#64748B',
        'corp-border': '#E2E8F0',
        'corp-light': '#F8FAFC',
      },
      fontFamily: {
        heading: ['"Poppins"', 'sans-serif'],
        body: ['"Open Sans"', 'sans-serif'],
        sans: ['"Open Sans"', '"Roboto"', 'sans-serif'],
      },
      boxShadow: {
        'corp': '0 4px 20px -2px rgba(15, 30, 54, 0.05), 0 2px 6px -1px rgba(15, 30, 54, 0.03)',
        'corp-hover': '0 20px 25px -5px rgba(15, 30, 54, 0.1), 0 10px 10px -5px rgba(15, 30, 54, 0.04)',
      },
    },
  },
  plugins: [],
}
