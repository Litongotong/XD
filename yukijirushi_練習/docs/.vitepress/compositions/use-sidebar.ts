import type { DefaultTheme } from 'vitepress'

const SECTION = {
  GUIDE: '/guide/',
  COMPONENTS: '/components/',
}

/** themeConfig.sidebar */
export default function useSidebar(): DefaultTheme.Sidebar {
  return {
    ...useGuideSidebar(),
    ...useComponentsSidebar(),
  }
}

function useGuideSidebar(): DefaultTheme.Sidebar {
  return {
    [SECTION.GUIDE]: [
      {
        text: 'Essentials',
        items: [
          { text: '開発規約', link: `${SECTION.GUIDE}development-guidline` },
          { text: 'ディレクトリ構成', link: `${SECTION.GUIDE}directory-tree` },
          { text: 'ルーティング', link: `${SECTION.GUIDE}routing` },
          { text: 'メッセージ', link: `${SECTION.GUIDE}message` },
          {
            text: '引継データ領域',
            link: `${SECTION.GUIDE}transferred-data-area`,
          },
          {
            text: '画面データ領域',
            link: `${SECTION.GUIDE}screen-data-area`,
          },
        ],
      },

      {
        text: 'Documents',
        items: [{ text: '資料', link: `${SECTION.GUIDE}material` }],
      },
    ],
  }
}

function useComponentsSidebar(): DefaultTheme.Sidebar {
  return {
    [SECTION.COMPONENTS]: [
      {
        text: '部品',
        items: [
          {
            text: '部品情報',
            link: `${SECTION.COMPONENTS}component-information`,
          },
          {
            text: '部品間データ送信',
            link: `${SECTION.COMPONENTS}component-communication`,
          },
        ],
      },
    ],
  }
}
