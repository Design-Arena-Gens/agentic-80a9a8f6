import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        karma: {
          red: '#E63946',
          dark: '#1D3557',
        },
        ayanokoji: {
          blue: '#457B9D',
          light: '#A8DADC',
        },
      },
    },
  },
  plugins: [],
};
export default config;
