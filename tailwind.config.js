/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#535353',
          light: '#f2f3f5',
          hover: '#c2c3c4bb',
          active: '#93c5fd',
        },
        light: {
          DEFAULT: '#ffebee',
          red: '#ef9a9a'
        }
      },
    },
  },
  plugins: [],
}

