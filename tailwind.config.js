module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'bgTheme': '#F80',
    }),
    extend: {
      colors: {
        'orange': '#F80',
      },
      boxShadow: {
        'offset-green': '2px 2px green'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
