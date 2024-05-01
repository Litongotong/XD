import { ref } from 'vue'
import { defineStore } from 'pinia'

import type { Button } from '@/types/components/button'

export const useButtonConfig = defineStore('headerFooterButtons', () => {
  // ヘッダのボタン設定
  let defaultHeaderButtonConfigs: Button.Config[] = [
    {
      title: '戻る(F10)',
      onClick: () => window.close(),
    },

    {
      title: 'メニュー(F11)',
      onClick: () => window.close(),
    },

    {
      title: '業務終了(F12)',
      onClick: () => window.close(),
    },
  ]

  defaultHeaderButtonConfigs = defaultHeaderButtonConfigs.map<Button.Config>(
    (button) => ({
      ...button,
      disabled: false,
    }),
  )

  const headerButtonConfigs = ref<Button.Config[]>(defaultHeaderButtonConfigs)

  const setHeaderButtonConfigs = (buttonConfigs: Button.Config[]): void => {
    headerButtonConfigs.value = buttonConfigs
  }

  const resetHeaderButtonConfigs = (): void => {
    headerButtonConfigs.value = defaultHeaderButtonConfigs
  }

  //フッターのボタン設定
  const defaultFooterButtonConfigs: Button.Config[] = []

  for (let i = 0; i < 9; i++) {
    const count = i + 1

    defaultFooterButtonConfigs.push({
      title: `(F${count})`,
      disabled: true,
      onClick: () => console.log(`click (F${count})`),
    })
  }

  const footerButtonConfigs = ref<Button.Config[]>(defaultFooterButtonConfigs)

  const setFooterButtonConfigs = (buttonConfigs: Button.Config[]): void => {
    footerButtonConfigs.value = buttonConfigs
  }

  const resetFooterButtonConfigs = (): void => {
    footerButtonConfigs.value = defaultFooterButtonConfigs
  }

  return {
    headerButtonConfigs,
    setHeaderButtonConfigs,
    resetHeaderButtonConfigs,
    footerButtonConfigs,
    setFooterButtonConfigs,
    resetFooterButtonConfigs,
  }
})
