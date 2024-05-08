import type { DefaultTheme } from 'vitepress'
import { SECTION } from './constants'

/** ガイドページ用サイドバー */
export function useGuideSidebar(): DefaultTheme.Sidebar {
  return {
    [SECTION.GUIDE]: [
      {
        text: 'Essentials',
        items: [
          { text: '開発規約', link: `${SECTION.GUIDE}development-guidline` },
          { text: 'ディレクトリ構造', link: `${SECTION.GUIDE}directory-tree` },
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
