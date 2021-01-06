module.exports = {
  purge: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  darkMode: "class",
  theme: {
    fontFamily: {
      header: ["LibreCaslonText", "ui-serif", "Georgia"],
      sans: ["Wotfard", "Helvetica", "Arial", "ui-sans-serif", "system-ui"],
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
  variants: {
    extend: {
      stroke: ["hover", "focus"],
      transitionProperty: ["hover", "focus"],
      translate: ["group-hover"],
      animation: ["hover"],
    },
  },
  plugins: [],
};
