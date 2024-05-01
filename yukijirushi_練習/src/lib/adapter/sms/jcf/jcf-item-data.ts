import { ref } from 'vue'

export class JCFItemData<Value extends any = any> {
  itemId: string
  enable = ref(true)
  backgroundColor = ref('')
  value = ref<Value>()

  constructor(itemId: string, defaultValue?: Value) {
    this.itemId = itemId
    this.value.value = defaultValue
  }

  isEnabled(): boolean {
    return this.enable.value
  }

  setBackground(bgColor: string) {
    this.backgroundColor.value = bgColor
  }
}
