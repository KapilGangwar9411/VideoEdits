export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'k2d': ['K2D', 'sans-serif'],
        'bricolage': ['Bricolage Grotesque', 'sans-serif'],
      },
      colors: {
        'neon': '#00ff94',
      },
    },
  },
  plugins: [],
}