import { inject, provide } from 'vue'

const SCREEN_ID = 'screenId'
const FRAME_ID = 'frameId'

export const provider = {
  provide: {
    screen: (screenId: string) => provide(SCREEN_ID, screenId),
    frame: (frameId: string) => provide(FRAME_ID, frameId),
  },

  inject: {
    // TODO: add default when router is implemented
    screen: () => inject<string>(SCREEN_ID, ''),
    frame: () => inject<string>(FRAME_ID, ''),
  },
} as const
