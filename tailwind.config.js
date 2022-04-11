const { fontFamily } = require("tailwindcss/defaultTheme");

// @ts-check
/**
 * @type {import("tailwindcss/tailwind-config").TailwindConfig}
 */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      header: ['"Libre Caslon Text"', ...fontFamily.serif],
      sans: ["Wotfard", ...fontFamily.sans],
    },
    extend: {
      colors: {
        gray: {
          850: "#1a1a1a",
          750: "#2c2c2c",
          550: "#4b4b4b",
          350: "#c8c8c8",
          150: "#efefef",
        },
      },
      gridTemplateRows: {
        layout: "auto 1fr auto",
      },
    },
  },
  plugins: [],
};
