/** @type {import('tailwindcss').Config} */

// Импорты плагинов
// import PluginName from 'PluginName';
import AspectRatio from '@tailwindcss/aspect-ratio'; // https://github.com/tailwindlabs/tailwindcss-aspect-ratio
import ContainerQueries from '@tailwindcss/container-queries'; // https://github.com/tailwindlabs/tailwindcss-container-queries
import ResetForms from '@tailwindcss/forms'; // https://github.com/tailwindlabs/tailwindcss-forms


export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [AspectRatio, ContainerQueries, ResetForms],
}

