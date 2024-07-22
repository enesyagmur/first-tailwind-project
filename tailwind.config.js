module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
      colors: {
        customYellow: "#FAE0C1",
      },
      animation: {
        "position-change": "position-change 2s forwards ease-in-out",
        "border-color-change": "border-color-change 1s infinite ease",
      },
      keyframes: {
        "position-change": {
          "0%": { paddingLeft: "0", opacity: "0.1" },
          "100%": { paddingLeft: "25%", opacity: "1" },
        },
        "border-color-change": {
          "0%": { boxShadow: "0 0 1px 1px rgba(0, 0, 0, 0.7)" },
          "25%": { boxShadow: "0 0 3px 3px rgba(0, 0, 0, 0.7)" },
          "50%": { boxShadow: "0 0px 6px 6px rgba(0, 0, 0, 0.7)" },
          "75%": { boxShadow: "0 0 3px 3px rgba(0, 0, 0, 0.7)" },
          "100%": { boxShadow: "0 0 1px 1px rgba(0, 0, 0, 0.7)" },
        },
      },
    },
  },
  plugins: [],
};
