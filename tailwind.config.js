const { nextui } = require("@nextui-org/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'lime': '#a3e635', // Define sua nova cor
        'custom-green': '#16a34a',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],  // Aqui você definiu a fonte Inter
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          primary: "#301050", // Mapear "primary" para o azul desejado
        },
        dark: {
          primary: "#005bc4", // Outra cor para o modo escuro, se necessário
        },
      },
    }),
  ],
};
