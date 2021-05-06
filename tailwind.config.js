const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Karla', ...defaultTheme.fontFamily.sans],
        serif: ['Martel', ...defaultTheme.fontFamily.serif]
      },
      colors: {
        'primary': '#123C69',
        'secondary': '#EDC7B7',
        'info': '#AC3B61',
        'light': '#EEE2DC',
        'dark': '#BAB2B5'
      },
      animation: {
        'bounceSlow': 'bounceSlow 1s infinite'
      },
      keyframes: {
        bounceSlow: {
          '0%, 100%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
          },
          '50%': {
            transform: 'translateY(-25%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
          }
        }
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/line-clamp')],
}
