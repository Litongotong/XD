import { isRef, toRaw } from 'vue'

export const getRaw = (ref: any) => {
  if (isRef(ref)) {
    return toRaw(ref.value)
  }
  return toRaw(ref)
}
