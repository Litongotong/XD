<template>
  <JCFFieldFilledDate
    :data-item-id="id"
    :data-component-name="EComponentName.SMSJCFFieldFilledDateExt"
    v-bind="props"
    :install="installInstanceForSMSJCFFieldFilledDateExt"
    isSMS
  />
</template>

<script setup lang="ts">
import { EComponentName } from '@/lib/adapter/components/SetupData/instanceMap'
import type { SMSJCFFieldFilledDateExtProps } from './types'
import JCFFieldFilledDate from '../JCFFieldFilledDate/index.vue'
import { installInstanceForSMSJCFFieldFilledDateExt } from '../utils/instance'

defineOptions({
  name: EComponentName.SMSJCFFieldFilledDateExt,
})

const props = defineProps<SMSJCFFieldFilledDateExtProps>()

const id = props.id
</script>

<style scoped></style>
