<template>
  <JCFFieldLong
    v-bind="props"
    :data-item-id="id"
    :data-component-name="EComponentName.YUKIFieldLong"
    :is-yuki="true"
  />
</template>

<script setup lang="ts">
import type { YUKIFieldLongProps } from './types'

import JCFFieldLong from '../JCFFieldLong/index.vue'
import { EComponentName } from '@/lib/adapter/components/SetupData/instanceMap'

defineOptions({
  name: EComponentName.YUKIFieldLong,
})

const props = defineProps<YUKIFieldLongProps>()

const id = props.id
</script>
