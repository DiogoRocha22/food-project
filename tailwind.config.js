/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:  {
        "primary": "#b31111"
      } 
    },
  },
  plugins: [require("daisyui")],
}

