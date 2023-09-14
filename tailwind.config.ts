import type { Config } from "tailwindcss";
import {nextui} from "@nextui-org/react";
const colors = require('tailwindcss/colors')

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        colors: {
          ...colors,
            navy: "#27005D",
            purple: "#9400FF",
            skyblue: "#AED2FF",
            lightblue: "#E4F1FF",
        },
        extend: {
            fontFamily: {
                sfmedium: ["var(--font-sfmedium)"],
                sfheavy: ["var(--font-sfheavy)"],
                sfbold: ["var(--font-sfbold)"],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    darkMode: "class",
    plugins: [nextui()],
};
export default config;
