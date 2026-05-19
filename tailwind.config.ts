import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#e8e2da",
        taupe: "#c4bdb7",
        body: "#716862",
        dark: "#3a2e28",
        white: "#ffffff",
        highlight: "#eeea59",
      },
      screens: {
        xs: "350px",
      },
    },
  },
  plugins: [],
};

export default config;
