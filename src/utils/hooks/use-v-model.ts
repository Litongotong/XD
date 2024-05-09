import { type WritableComputedRef, getCurrentInstance, computed } from 'vue'

/**
 * @description 部品内に便利に v-model を設定させる為のフック
 * @props 部品の props
 * @name props 内の属性名
 * @returns v-model 用の読み書き可能の算出属性
 * @see https://vuejs.org/guide/components/v-model.html
 */
export function useVModel<Props extends object, Key extends keyof Props>(
  props: Props,
  name: Key
): WritableComputedRef<Props[Key]> {
  // 現在の部品インスタンスを取得
  const instance = getCurrentInstance()

  // VueCompositionAPI は `setup` 内のみ使える
  if (!instance) {
    throw new Error('This function needs to used in setup.')
  }

  return computed<Props[Key]>({
    get: () => props[name],
    set: (value) => instance.emit(`update:${name.toString()}`, value),
  })
}
