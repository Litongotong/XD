<template>
  <JCFSpread
    :data-item-id="id"
    :data-component-name="EComponentName.SMSJCFSpread"
    v-bind="props"
    :is-sms="true"
    :install="installInstanceForSMSJCFSpread"
  />
</template>

<script setup lang="ts">
import JCFSpread from '../JCFSpread/index.vue'

import type { SMSJCFSpreadProps } from './types'

import { EComponentName } from '@/lib/adapter/components/SetupData/instanceMap'
import { installInstanceForSMSJCFSpread } from '../utils/instance'

defineOptions({
  name: EComponentName.SMSJCFSpread,
})

const props = defineProps<SMSJCFSpreadProps>()
</script>
