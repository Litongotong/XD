import { defineConfig } from 'vitepress'
import { useNav, useSidebar } from './compositions'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '雪メグ Frontend  Documents',
  description: '雪メグ Project',
  appearance: 'dark',

  // https://vitepress.dev/reference/default-theme-config
  themeConfig: {
    nav: useNav(),
    sidebar: useSidebar(),
  },
})
