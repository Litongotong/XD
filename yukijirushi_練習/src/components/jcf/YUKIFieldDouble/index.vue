<template>
  <JCFFieldDouble
    v-bind="props"
    :data-item-id="id"
    :data-component-name="EComponentName.YUKIFieldDouble"
    :is-yuki="true"
    :install="installInstanceForYUKIFieldDouble"
  />
</template>

<script setup lang="ts">
import type { YUKIFieldDoubleProps } from './types'

import JCFFieldDouble from '../JCFFieldDouble/index.vue'
import { EComponentName } from '@/lib/adapter/components/SetupData/instanceMap'
import { installInstanceForYUKIFieldDouble } from '../utils/instance'

defineOptions({
  name: EComponentName.YUKIFieldDouble,
})

const props = defineProps<YUKIFieldDoubleProps>()

const id = props.id
</script>
