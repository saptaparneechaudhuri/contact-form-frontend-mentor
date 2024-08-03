/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "green-light": "hsl(148, 38%, 91%)",
        "green-medium": "hsl(169, 82%, 27%)",
        "primary-red": "hsl(0, 66%, 54%)",
        "custom-white": "hsl(0, 0%, 100%)",
        "custom-grey-500": "hsl(186, 15%, 59%)",
        "custom-grey-900": "hsl(187, 24%, 22%)",
      },
    },
  },
  plugins: [],
};
