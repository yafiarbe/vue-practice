import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  // ↓↓↓↓↓↓↓↓↓↓ изменить на текущее название проекта ( опция: base ) ↓↓↓↓↓↓↓↓↓↓↓
  // base: '/vue-practice/',
  devtools: true,
  performance: true,
  plugins: [vue(), vueJsx()],
  define: {},
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
