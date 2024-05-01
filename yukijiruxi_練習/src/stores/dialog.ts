import { defineStore } from 'pinia'
import { ref } from 'vue'

import type { Dialog } from '@/types/components'

export const useDialog = defineStore('dialog', () => {
  const showDialog = ref(false)
  function setShowDialog(status: boolean) {
    showDialog.value = status
  }

  const dialogConfig = ref<Dialog.Property>({})
  function setDialogConfig(config: Dialog.Property) {
    dialogConfig.value = config
  }

  return {
    showDialog,
    setShowDialog,

    dialogConfig,
    setDialogConfig,
  }
})
