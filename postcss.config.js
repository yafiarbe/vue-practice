export default {
  plugins: {
    'postcss-import': {},
    tailwindcss: {},
    autoprefixer: {
      overrideBrowserslist: ['last 5 versions'],
      grid: true,
      flex: true
    }
  }
}
