/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "pattern-a": "#FFC62D",
        "pattern-b": "#3ECDE0",
        "pattern-c": "#FF8157",
        "pattern-d": "#1D6FF2",
        "card-bg": "#191B1F",
      },
    },
  },
  plugins: [],
};
