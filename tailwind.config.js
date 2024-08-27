/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-blue-gradient': 'linear-gradient(to right, rgba(173, 216, 230, 0.5), white 25%, white 75%, rgba(173, 216, 230, 0.5))',
      },
      backgroundImage2: {
        'text-gradient': 'linear-gradient(90deg, #FF0000, #FF69B4, #000000, #1E90FF)',
      },
      backgroundClip: {
        text: 'text',
      },
      textFillColor: {
        transparent: 'transparent',
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
      },
      animation: {
        bounce: 'bounce 1s infinite',
      },
 
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    function ({ addUtilities }) {
      addUtilities({
        '.gradient-text': {
          'background-image': 'linear-gradient(90deg, #FF0000, #FF69B4, #000000, #1E90FF)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        },
      });
    },
  ],
}

