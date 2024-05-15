<template>
  <JCFFieldFilledDate
    v-bind="props"
    :data-item-id="id"
    :data-component-name="EComponentName.YUKIFieldFilledDate"
    :is-yuki="true"
  />
</template>

<script setup lang="ts">
import type { YUKIFieldFilledDateProps } from './types'

import JCFFieldFilledDate from '../JCFFieldFilledDate/index.vue'
import { EComponentName } from '@/lib/adapter/components/SetupData/instanceMap'

defineOptions({
  name: EComponentName.YUKIFieldFilledDate,
})

const props = defineProps<YUKIFieldFilledDateProps>()

const id = props.id
</script>
