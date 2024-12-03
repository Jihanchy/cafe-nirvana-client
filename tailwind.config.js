/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        rancho: "Rancho , cursive"
      },
      backgroundImage: {
        nav_img: "url('/src/assets/more/15.jpg')",
        footer_img: "url('/src/assets/more/13.jpg')",
        copyright_img: "url('/src/assets/more/24.jpg')",
        banner_img: "url('/src/assets/more/3.png')",
        coffee_bg: "url('/src/assets/more/1.png')",
        add_coffee_bg: "url('/src/assets/more/11.png')",
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

