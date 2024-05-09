<template>
  <div
    :data-item-id="id"
    :data-component-name="EComponentName.JCFImage"
    :style="style"
  >
    <img :src="url" alt="image" />
  </div>
</template>

<script setup lang="ts">
import { EComponentName } from '@/lib/adapter/components/SetupData/instanceMap'
import type { JCFImageProps } from './types'
import { getInstance } from '../utils/instance'
import type { JCFImageData } from '@/lib/jcf/gui/JCFImageData'
import { computed } from 'vue'
import { calculateCommonStyle } from '../utils/transform'

defineOptions({
  name: EComponentName.JCFImage,
})

const props = defineProps<JCFImageProps>()

const id = props.id

const ins = getInstance<JCFImageData>(props)

const url = computed(() => {
  const fallback = props.imageURL
  return ins ? ins.getValue() || fallback : fallback
})

const style = computed(() => {
  const commonStyle = calculateCommonStyle({ instance: ins, props })
  return commonStyle
})
</script>

<style scoped></style>
