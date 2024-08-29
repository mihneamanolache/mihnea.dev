import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            animation: {
                typewriter: "typewriter 1s steps(40) 1s 1 normal both",
                caret: "caret 1s steps(1) infinite",

            },
            keyframes: {
                typewriter: {
                    to: {
                        left: '100%',
                    },
                },
                blink: {
                    '0%': {
                        opacity: '0',
                    },
                    '0.1%': {
                        opacity: '1',
                    },
                    '50%': {
                        opacity: '1',
                    },
                    '50.1%': {
                        opacity: '0',
                    },
                    '100%': {
                        opacity: '0',
                    },
                },
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            fontFamily: {
                sans: [
                    "var(--font-ubuntu-nerd)",
                ]
            },
            colors: {
                tokyo: {
                    "background-dark": "#101014", // Editor Background (Dark)
                    "red": "#f7768e",       // Keyword, HTML elements, Regex group symbol, CSS units, Terminal Red
                    "orange": "#ff9e64",    // Number and Boolean constants, Language support constants
                    "yellow": "#e0af68",    // Function parameters, Regex character sets, Terminal Yellow
                    "light-gray": "#cfc9c2",// Parameters inside functions (semantic highlighting only)
                    "green": "#9ece6a",     // Strings, CSS class names
                    "teal": "#73daca",      // Object literal keys, Markdown links, Terminal Green
                    "aqua": "#b4f9f8",      // Regex literal strings
                    "cyan": "#2ac3de",      // Language support functions, CSS HTML elements
                    "light-blue": "#7dcfff",// Object properties, Regex quantifiers and flags, Markdown headings, Terminal Cyan, Markdown code, Import/export keywords
                    "blue": "#7aa2f7",      // Function names, CSS property names, Terminal Blue
                    "purple": "#bb9af7",    // Control Keywords, Storage Types, Regex symbols and operators, HTML Attributes, Terminal Magenta
                    "white": "#c0caf5",     // Variables, Class names, Terminal White
                    "foreground": "#a9b1d6",// Editor Foreground
                    "text": "#9aa5ce",      // Markdown Text, HTML Text
                    "comment": "#565f89",   // Comments
                    "dark-gray": "#414868", // Terminal Black
                    "background-storm": "#24283b", // Editor Background (Storm)
                    "background-night": "#1a1b26", // Editor Background (Night)
                }
            }
        },
    },
    plugins: [
         require('@tailwindcss/typography'),
    ],
};
export default config;
