import type { DefaultTheme } from 'vitepress'
import { SECTION } from './constants'

/** 部品ページ用サイドバー */
export function useComponentSidebar(): DefaultTheme.Sidebar {
  /**
   * 部品作成ガイドのリンクを算出する。
   * @param filename 部品作成ガイドのファイル名
   */
  const computeCreationGuideLink = (filename: string): string => {
    const formatted = filename.trim().replace('.md', '')
    return `${SECTION.COMPONENTS}${formatted}`
  }

  const creationGuide: DefaultTheme.Sidebar = [
    {
      text: '部品',
      items: [
        {
          text: '部品作成手順',
          link: computeCreationGuideLink('component-creation-process'),
        },
        {
          text: '部品間データ送信',
          link: computeCreationGuideLink('component-communication'),
        },
      ],
    },
  ]

  /**
   * 部品型のリンクを算出する。
   * @param filename 部品型のファイル名
   */
  const computeWijmoGuideLink = (filename: string): string => {
    const formatted = filename.trim().replace('.md', '')
    return `${SECTION.COMPONENTS}wijmo/${formatted}`
  }

  const wijmoGuide: DefaultTheme.Sidebar = [
    {
      text: 'Wijmo',
      items: [
        {
          text: 'Wijmo ライセンスキー 使用説明',
          link: computeWijmoGuideLink('wijmo-license-manual'),
        },
      ],
    },
  ]

  /**
   * 部品仕様書のリンクを算出する。
   * @param filename 部品仕様書のファイル名
   */
  const computeStyleGuideLink = (filename: string): string => {
    const formatted = filename.trim().replace('.md', '')
    return `${SECTION.COMPONENTS}style-guide/${formatted}`
  }

  const styleGuide: DefaultTheme.Sidebar = [
    {
      text: '仕様書',
      collapsed: false,
      items: [
        {
          text: 'BaseText',
          link: computeStyleGuideLink('base-text'),
        },
      ],
    },
  ]

  /**
   * 部品型のリンクを算出する。
   * @param filename 部品型のファイル名
   */
  const computeTypeLink = (filename: string): string => {
    const formatted = filename.trim().replace('.md', '')
    return `${SECTION.COMPONENTS}types/${formatted}`
  }

  const type: DefaultTheme.Sidebar = [
    {
      text: '型',
      collapsed: false,
      items: [
        {
          text: 'ComponentCommonProperty',
          link: computeTypeLink('component-common-property'),
        },
        {
          text: 'CSS',
          link: computeTypeLink('css'),
        },
      ],
    },
  ]

  return {
    [SECTION.COMPONENTS]: [
      ...creationGuide,
      ...wijmoGuide,
      ...styleGuide,
      ...type,
    ],
  }
}
