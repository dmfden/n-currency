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
        'bounce-ended': 'bounce 1s 2',
        'backInLeft': 'backInLeft 1s 1',
        'fadeInUp': 'fadeInUp 1s 1',
        'fadeInDown': 'fadeInDown 1s 1',
      },
      keyframes: {
        backInLeft: {
          '0%': { transform: 'translateX(-2000px) scale(0.7)', opacity: '0.7' },
          '80%': { transform: 'translateX(0px) scale(0.7)', opacity: '0.7' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        fadeInUp: {
          'from': {transform: 'translate3d(0, 100%, 0)', opacity: '0'},
          'to': {transform: 'translate3d(0, 0, 0)', opacity: '1'}
        },
        fadeInDown: {
          'from': {transform: 'translate3d(0, -100%, 0)', opacity: '0'},
          'to': {transform: 'translate3d(0, 0, 0)', opacity: '1'}
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        stoneWhite: {
          50: '#C1C2CA',
          100: '#F6F7FF',
          500: '#707C87'
        },
        blueGeneral: {
          100: '#2C36F2'
        }
      }
    },
  },
  plugins: [],
};
export default config;
