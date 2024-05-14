import { inject, provide } from 'vue'

const SCREEN_ID = 'screenId'
const FRAME_ID = 'frameId'
const ITEM_ID = 'itemId'

const PANEL_CLASS_NAME = 'panelClassName'
const LOGIC_CLASS_NAME = 'logicClassName'

type Getter = () => string

export const provider = {
  provide: {
    screen: (getScreenId: Getter) => {
      provide(SCREEN_ID, getScreenId)
    },
    frame: (getFrameId: Getter) => {
      provide(FRAME_ID, getFrameId)
    },
    item: (getItemId: Getter) => {
      provide(ITEM_ID, getItemId)
    },

    panelClassName: (getClassName: Getter) => {
      provide(PANEL_CLASS_NAME, getClassName)
    },
    logicClassName: (getClassName: () => string | undefined) => {
      provide(LOGIC_CLASS_NAME, getClassName)
    },
  },

  inject: {
    screen: () => {
      const getScreenId = inject<Getter>(SCREEN_ID, () => '')
      return getScreenId
    },
    frame: () => {
      const getFrameId = inject<Getter>(FRAME_ID, () => '')
      return getFrameId
    },
    item: () => {
      const getItemId = inject<Getter>(ITEM_ID, () => '')
      return getItemId
    },

    panelClassName: () => {
      const getClassName = inject<Getter>(PANEL_CLASS_NAME, () => '')
      return getClassName
    },
    logicClassName: () => {
      const getClassName = inject<() => string | undefined>(LOGIC_CLASS_NAME, () => '')
      return getClassName
    },
  },
} as const
