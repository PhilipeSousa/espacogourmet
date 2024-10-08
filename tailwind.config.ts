import type { Config } from "tailwindcss";
import { DEFAULT_CIPHERS } from "tls";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#624E88', 
        },
        accent: {
          DEFAULT: '#8967B3', 
        },
        creme:{
          DEFAULT: '#E6D9A2',
        },
        gray: {
          100: '#F7FAFC', 
          200: '#EDF2F7', 
        },
      },
    },
  },
  plugins: [],
};
export default config;
 
