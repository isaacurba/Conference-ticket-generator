/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          0: "hsl(0, 0%, 100%)",
          300: "hsl(252, 6%, 83%)",
          500: "hsl(245, 15%, 58%)",
          700: "hsl(245, 19%, 35%)",
          701: "hsl(245, 19%, 35%, 0.5)",
          900: "hsl(248, 70%, 10%)", 
        },
        orange: {
          500: "hsl(7, 88%, 67%)",
          700: "hsl(7, 71%, 60%)",
        },
      },
      fontFamily: {
        inconsolata: ["Inconsolata", "monospace"],
      },
      fontSize: {
        label: "20px",
      },
      backgroundImage: {
        "gradient-text": "linear-gradient(to right, hsl(7, 86%, 67%), hsl(0, 0%, 100%))",
      },
    },
  },
  plugins: [],
};