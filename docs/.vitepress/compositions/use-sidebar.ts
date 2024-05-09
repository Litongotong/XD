import type { DefaultTheme } from 'vitepress'
import { useGuideSidebar } from './use-guide-sidebar'
import { useComponentSidebar } from './use-component-sidebar'
import { useChangingManualSidebar } from './use-changing-manual-sidebar'

/** themeConfig.sidebar */
export default function useSidebar(): DefaultTheme.Sidebar {
  return {
    ...useGuideSidebar(),
    ...useComponentSidebar(),
    ...useChangingManualSidebar(),
  }
}
