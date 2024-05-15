import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // .env.[mode] ファイルから環境変数を取り出す
  const viteEnv = loadEnv(mode, process.cwd())

  return {
    plugins: [vue()],

    base: viteEnv.VITE_BASE_URI,

    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },

    build: {
      // sourcemap: true,
    }
  }
})
