/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'], // optional secondary
      },
      colors: {
        background: '#1E1E1E',  // Dark gray background
        card: '#2C2C2E',        // Charcoal card surfaces
        orange: {
          light: '#FF9F40',     // Soft orange
          DEFAULT: '#FF6B00',   // Bright orange
          dark: '#E65C00',      // Deep orange for hover states
        },
        gray: {
          base: '#E5E7EB',      // Light gray text
          muted: '#9CA3AF',     // Muted gray
          border: '#3B3B3B',    // Borders
        }
      }
    },
  },
  plugins: [],
}
