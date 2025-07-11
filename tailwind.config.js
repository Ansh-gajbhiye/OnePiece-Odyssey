/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        zentry: ["zentry", "sans-serif"],
        general: ["general", "sans-serif"],
        "circular-web": ["circular-web", "sans-serif"],
        "robert-medium": ["robert-medium", "sans-serif"],
        "robert-regular": ["robert-regular", "sans-serif"],
      },
      colors: {
        blue: {
          50: "#DFDFF0",
          75: "#dfdff2",
          100: "#F0F2FA",
          200: "#010101",
          300: "#4FB7DD",
        },
        violet: {
          300: "#5724ff",
        },
        yellow: {
          100: "#8e983f",
          300: "#edff66",
        },
      },

       backgroundImage: {
        'blue-gradient': 'linear-gradient(135deg, #4FB7DD 0%, #2A7FFF 50%, #0A0AFF 100%)',

         "one-piece-gradient":
          "linear-gradient(135deg, #FFCC00 0%, #FF6600 50%, #CC0000 100%)",
      }
    },
  },
  plugins: [],
};
