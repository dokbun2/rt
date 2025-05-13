/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8b5cf6",
        "primary-dark": "#7c3aed",
        "primary-light": "#a78bfa",
        secondary: "#f1f5f9",
        dark: "#0f172a",
      },
      fontFamily: {
        'paperlogy': ['Paperlogy', 'sans-serif']
      },
      backgroundImage: {
        'hero-pattern': "url('/images/office-interior.jpg')",
      }
    },
  },
  plugins: [],
}; 