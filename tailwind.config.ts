import type { Config } from "tailwindcss";
import tailwindTypography from "@tailwindcss/typography";
import daisyui from "daisyui";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },

  plugins: [tailwindTypography, daisyui],
  daisyui: { themes: ["pastel"] },
} satisfies Config;
