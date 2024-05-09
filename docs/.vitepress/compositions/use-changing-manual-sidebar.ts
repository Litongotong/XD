import type { DefaultTheme } from 'vitepress'
import { SECTION } from './constants'

/** 変換指示書ページ用サイドバー */
export function useChangingManualSidebar(): DefaultTheme.Sidebar {
  /**
   * 変換指示書のリンクを算出する。
   * @param filename 変換指示書のファイル名
   */
  const computeLink = (filename: string): string => {
    const formatted = filename.trim().replace('.md', '')
    return `${SECTION.CHANGING_MANUAL}${formatted}`
  }

  return {
    [SECTION.CHANGING_MANUAL]: [
      {
        text: '変換指示書',

        // フォルダに新しい指示書を追加する際はこの中にもアイテムを追加してください。
        items: [
          { text: '変換指示書サンプル', link: computeLink('manual-sample') },
          {
            text: '変換指示書（JCF編）',
            link: computeLink('conversion-instruction-jcf'),
          },
        ],
      },
    ],
  }
}
