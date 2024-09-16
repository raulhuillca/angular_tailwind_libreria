/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.ts',
    './projects/my-library/src/**/*.html',
    './projects/my-library/src/**/*.ts'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
