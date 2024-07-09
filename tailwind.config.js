/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-midnight': '#0F0F11',
        'dark-charcoal': '#0F0F11',
        'soft-gray': '#98969B',
        'slate-gray': '#96939C',
        'light-gray': '#F6F5F6',
        'light-pink': '#FBB9CB',
        'bright-pink': '#F97583',
        'vivid-pink': '#F637E3',
        'bright-magenta': '#F11653',
        'vivid-purple': '#8514F5',
        'deep-purple': '#6900d1',
      }
    },
  },
  plugins: [],
}

