/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "gray-50": "#f7f7f7", // light mode background
        "gray-100": "#e3e3e3", // dark mode text
        "gray-200": "#c8c8c8",
        "gray-300": "#a4a4a4",
        "gray-400": "#818181",
        "gray-500": "#666666",
        "gray-600": "#515151",
        "gray-700": "#434343",
        "gray-800": "#383838",
        // "gray-900": "#313131", // light mode text
        "gray-900": "#1E1E1E", // light mode text
        "gray-950": "#121212", // dark mode background

        primary: "#FFE071",
        "primary-50": "#fffbeb",
        "primary-100": "#fff3c6",
        "primary-200": "#ffe071",
        "primary-300": "#ffd24a",
        "primary-400": "#ffbd20",
        "primary-500": "#f99b07",
        "primary-600": "#dd7302",
        "primary-700": "#b75006",
        "primary-800": "#943d0c",
        "primary-900": "#7a320d",
        "primary-950": "#461902",

        // light: {
        //   primary: "#4287f5",
        //   accent: "#f542a1",
        //   background: "#ffffff",
        //   text: "#333333",
        //   highlight: "#f5d742",
        //   "subtle-shade": "#e8e8e8",
        // },
        // dark: {
        //   primary: "#7babf8",
        //   accent: "#38A3A5",
        //   background: "#121212",
        //   text: "#C4C4C4",
        //   highlight: "#F9FF4F",
        //   "subtle-shade": "#1E1E1E",
        // },
      },
      animation: {
        // Fade up and down
        "fade-up": "fade-up 0.5s",
        "fade-down": "fade-down 0.5s",
        // Tooltip
        "slide-up-fade": "slide-up-fade 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-down-fade": "slide-down-fade 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        // Fade up and down
        "fade-up": {
          "0%": {
            opacity: 0,
            transform: "translateY(10px)",
          },
          "80%": {
            opacity: 0.6,
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0px)",
          },
        },
        "fade-down": {
          "0%": {
            opacity: 0,
            transform: "translateY(-10px)",
          },
          "80%": {
            opacity: 0.6,
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0px)",
          },
        },
        // Tooltip
        "slide-up-fade": {
          "0%": { opacity: 0, transform: "translateY(6px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "slide-down-fade": {
          "0%": { opacity: 0, transform: "translateY(-6px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        tablet: "2rem",
        laptop: "4rem",
        desktop: "5rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    screens: {
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
      "2xl": "1536px",
    },
  },
  variants: {
    extend: {
      backgroundColor: [
        "dark",
        "dark-hover",
        "dark-group-hover",
        "dark-even",
        "dark-odd",
      ],
      textColor: [
        "dark",
        "dark-hover",
        "dark-group-hover",
        "dark-even",
        "dark-odd",
      ],
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    // require("tailwindcss-dark-mode"),
  ],
};
