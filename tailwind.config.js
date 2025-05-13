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
        primary: "#3b82f6",
        "primary-dark": "#2563eb",
        "primary-light": "#60a5fa",
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