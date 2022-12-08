/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,vue}"],
  theme: {
    extend: {
      colors: {
        green: "#42b883",
        "green-light": "#b4e4ce",
        "gray-dark": "#0f172a",
      },
    },
  },
};
