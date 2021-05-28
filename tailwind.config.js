module.exports = {
  purge: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
    "./helpers/**/*.{js,ts,jsx,tsx}",
    "./public/index.html",
  ],
  darkMode: false,
  theme: {
    fontFamily: {
      sans: ["Monaco", "ui-monospace", "SFMono-Regular", "Menlo", "Roboto"],
    },
    extend: {
      backgroundImage: {
        home: "url('./img/petinder-home.jpeg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
