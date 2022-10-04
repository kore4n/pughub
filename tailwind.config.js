/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'soldier': "url('/images/soldier.png')",
        'omnipyro': "url('/images/omnipyro.jpg')",
        'jorgen': "url('/images/jorgen.png')",
        'discord': "url('/images/discordlogo.png')",
      },
      colors: {
        "main-background": '#12181b',
        "navbar-background": '#2a2e35',
        "main-text" : "#dbe1e8",
        "gray-4" : "#6c7983",
        "gray-5" : "#454e56",
      },
      fontFamily: {
        'cubano': ['Cubano', 'sans-serif'],
        'sans-serif': ['sans-serif'],
      },
    },
  },
  plugins: [],
}