module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "pet-image": "url(http://pets-images.dev-apis.com/pets/wallpaperB.jpg)",
      },
      height: {
        99: "30rem",
      },
      borderRadius: {
        "custom": "50%",
      }
    },
  },
  variants: {
    extend: {
      // opacity: ({after}) => after(["disabled"]),
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
