import { inject, provide } from 'vue'

const SCREEN_ID = 'screenId'
const FRAME_ID = 'frameId'
const ITEM_ID = 'itemId'

const PANEL_CLASS_NAME = 'panelClassName'
const LOGIC_CLASS_NAME = 'logicClassName'

export const provider = {
  provide: {
    screen: (screenId: string) => provide(SCREEN_ID, screenId),
    frame: (frameId: string) => provide(FRAME_ID, frameId),
    item: (itemId: string) => provide(ITEM_ID, itemId),

    panelClassName: (className: string) => provide(PANEL_CLASS_NAME, className),
    logicClassName: (className?: string) => provide(LOGIC_CLASS_NAME, className),
  },

  inject: {
    screen: () => inject<string>(SCREEN_ID, ''),
    frame: () => inject<string>(FRAME_ID, ''),
    item: () => inject<string>(ITEM_ID, ''),

    panelClassName: () => inject<string>(PANEL_CLASS_NAME, ''),
    logicClassName: () => inject<string | undefined>(LOGIC_CLASS_NAME),
  },
} as const
