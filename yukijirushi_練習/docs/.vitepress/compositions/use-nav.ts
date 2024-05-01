import type { DefaultTheme } from 'vitepress'

/** themeConfig.nav */
export default function useNav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'Guide',
      link: '/guide/development-guidline',
      activeMatch: '/guide/',
    },

    {
      text: '部品',
      link: '/components/component-information',
      activeMatch: '/components/',
    },
  ]
}
