/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.tsx",
  ],
  theme: {
    extend: {
        fontFamily: {
            serif: ['var(--font-playfair-display)', 'serif']
        },
    }
  },
  plugins: [],
}