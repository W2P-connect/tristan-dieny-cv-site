import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        white: 'rgb(255, 255, 255)',
        primary: {
          darkest: 'rgb(49, 33, 99)',
          dark: 'rgb(85, 49, 167)',
          DEFAULT: 'rgb(146, 81, 247)',
          light: 'rgb(198, 150, 252)',
          lighter: 'rgb(239, 226, 249)',
          lightest: 'rgb(248, 242, 252)',
        },
        secondary: {
          dark: 'rgb(42, 51, 126)',
          DEFAULT: 'rgb(81, 108, 247)',
          light: 'rgb(149, 170, 251)',
          lighter: 'rgb(225, 231, 254)',
        },
        gray: {
          darkest: 'rgb(35, 35, 57)',
          darker: 'rgb(46, 46, 72)',
          dark: 'rgb(71, 81, 107)',
          DEFAULT: 'rgb(121, 129, 154)',
          light: 'rgb(172, 177, 195)',
          lighter: 'rgb(217, 223, 232)',
          lightest: 'rgb(226, 230, 238)',
          lightest2: 'rgb(247, 249, 252)',
        },
        status: {
          info: 'rgb(34, 195, 241)',
          success: {
            light: 'rgb(231, 250, 229)',
            DEFAULT: 'rgb(74, 192, 111)',
            dark: 'rgb(31, 92, 67)',
          },
          warning: 'rgb(244, 206, 16)',
        },
        social: {
          linkedin: '#0077B5', // LinkedIn officiel
        },
        gradient: {
          primary: 'rgb(146, 81, 247)',
        },
      },
    },
  },
  plugins: [],
}

export default config
