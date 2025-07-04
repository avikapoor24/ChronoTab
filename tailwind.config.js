/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dawn: '#FFD6E0', 
        morning: '#A7C7E7', 
        afternoon: '#FF9B45',
        evening: '#F081C7', 
        night: '#2A2E44',
        chatgpt: {
          green: '#10A37F',           // ChatGPT accent color
          darkBg: '#202123',          // Dark background (approx.)
          lightBg: '#F7F7F8',         // Light background (approx.)
          darkText: '#E5E5E5',        // Light gray text on dark bg
          lightText: '#202123',       // Dark text on light bg
        }, 
      },
      backgroundImage: {
        'dawn-gradient': 'linear-gradient(to right, #FFD6E0, #A7C7E7)',
        'morning-gradient': 'linear-gradient(to right, #A7C7E7, #6D9AA4)',
        'afternoon-gradient': 'linear-gradient(to right, #FF9B45, #FF6F3A)',
        'evening-gradient': 'linear-gradient(to right, #F081C7, #9A6FC1)',
        'night-gradient': 'linear-gradient(to right, #2A2E44, #161C2D)',
      },
    },
  },
  plugins: [],
}

