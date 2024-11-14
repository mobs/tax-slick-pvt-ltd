/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'gradient': 'linear-gradient(315deg, #12100e 0%, #2b4162 74%)',
        'blue-gradient': 'linear-gradient(45deg, #3296fa, #2563eb)',
        'grad': 'linear-gradient(22.5deg, #e48f6e, #cd7357, #ce764b)',
        'gradient-heading': "linear-gradient(90deg, #ECE18A 0%, #C58C34 35%, #ECE18A 100%)"
      },
      fontFamily: {
        modernline: ['Modernline', 'sans-serif'], 
        caslon: ['BigCaslon', 'serif']
      },
      colors: {
        background: "#1156a1",
        primary: '#ECE18A',
        heading: '#d0be96',
        bgHeading: '#e48f6e'
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
};
