module.exports = {
  purge: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
    "./helpers/**/*.{js,ts,jsx,tsx}",
    "./public/index.html",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Monaco", "ui-monospace", "SFMono-Regular", "Menlo", "Roboto"],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
