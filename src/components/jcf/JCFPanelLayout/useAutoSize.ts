import { EViewHint } from '@/lib/adapter/interface'
import { debounce } from '@/utils/useful/debounce'
import { onUnmounted, ref, watchEffect } from 'vue'

type Func = () => void
const noop = () => {}

export const useAutoSize = () => {
  const cancelObserver = ref<Func>(noop)
  const elmRef = ref<HTMLDivElement>()

  const getScreenElement = () => {
    return document.querySelector('.J_screen_layout') as HTMLDivElement
  }

  const refreshHeight = () => {
    const element = document
    let heightList: string[] = [`var(--panel-padding)`]
    const frames = element.querySelectorAll(`[${EViewHint.frameId}]`)
    if (!frames?.length) {
      return
    }
    ;(Array.from(frames) as HTMLDivElement[]).forEach((frameElm) => {
      const frameHeight = frameElm?.style?.height || '0px'
      const addHeight = (h: any) => {
        if (!h?.length) {
          return
        }
        if (h.includes('px')) {
          heightList.push(h)
        }
      }
      const layout = frameElm.querySelector(`[${EViewHint.panelLayout}]`) as
        | HTMLDivElement
        | undefined
      if (!layout) {
        addHeight(frameHeight)
        return
      }
      const height = layout?.style?.height
      if (!height) {
        addHeight(frameHeight)
        return
      }
      addHeight(height)
    })
    const heightTotal = `calc(${heightList.join(' + ')})`
    const screenElm = getScreenElement()
    if (screenElm.style.height !== heightTotal) {
      screenElm.style.height = heightTotal
    }
  }

  const refreshHeightDebounce = debounce(refreshHeight, 50)

  watchEffect(() => {
    if (!elmRef.value) {
      return
    }
    cancelObserver.value?.()
    const observer = new ResizeObserver(() => {
      refreshHeightDebounce()
    })
    observer.observe(elmRef.value)
    cancelObserver.value = () => {
      observer.disconnect()
    }
  })

  onUnmounted(() => {
    cancelObserver.value?.()
  })

  return {
    elmRef,
  }
}
