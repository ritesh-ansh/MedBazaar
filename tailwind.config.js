module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "Mulish", "sans-serif"],
        roboto: ["Roboto", "sans-serf"],
        mulish: ["Mulish", "sans-serif"],
        quicksand: ["Quicksand", "sans-serif"],
      },
      backgroundImage: {
        "back-ground":
          "url('https://images.unsplash.com/photo-1585435557343-3b092031a831?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80')",
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
