/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563EB', // This is bg-blue-600
          light: '#eff6ff', // This is bg-blue-50
        },
      },
    },
  },
  plugins: [],
}

