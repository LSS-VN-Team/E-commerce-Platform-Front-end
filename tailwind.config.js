/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        "login": "url('/image/roup2014.jpg)"
      },
      boxShadow: {
        inputsd: "0 1px 0 #091e4240",
        boxsd: "0 0 10px 2px rgb(0 0 0 / 0.1)",
      },
    },
  },
  plugins: [],
}
