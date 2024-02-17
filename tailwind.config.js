/** @type {import('tailwindcss').Config} */

// Импорты плагинов
// import PluginName from 'PluginName';
import AspectRatio from '@tailwindcss/aspect-ratio' // https://github.com/tailwindlabs/tailwindcss-aspect-ratio
import ContainerQueries from '@tailwindcss/container-queries' // https://github.com/tailwindlabs/tailwindcss-container-queries
import ResetForms from '@tailwindcss/forms' // https://github.com/tailwindlabs/tailwindcss-forms
import plugin from 'tailwindcss/plugin'
import Animated from 'tailwindcss-animated'

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
      BlackOpsOne: ['Black Ops One', 'sans-serif'],
      ProtestStrike: ['Protest Strike', 'sans-serif'],
      FjallaOne: ['Fjalla One', 'sans-serif']
    },
    extend: {}
  },
  plugins: [
    AspectRatio,
    ContainerQueries,
    ResetForms,
    Animated,
    plugin(function ({ addUtilities }) {
      // Add your custom styles here
      addUtilities({
        '': { '': '' }
      })
    })
  ]
}
