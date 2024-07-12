/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        home: "url('https://images.pexels.com/photos/80476/hayden-valley-yellowstone-valley-landscape-80476.jpeg?cs=srgb&dl=landscape-nature-sky-80476.jpg&fm=jpg')",
      },
    },
  },
  plugins: [],
};
