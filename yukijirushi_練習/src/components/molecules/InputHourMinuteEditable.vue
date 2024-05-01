<template>
  <ItemWrapper v-bind="props">
    <BaseTimeInput type="hour" v-model="hour" />{{ unitLabel.hour }}
    <BaseTimeInput type="minute" v-model="minute" />{{ unitLabel.minute }}
  </ItemWrapper>
</template>
<script lang="ts" setup>
import type { ItemWrapperProperty } from '@/types/components'

import ItemWrapper from '@/components/atoms/ItemWrapper.vue'
import BaseTimeInput from '@/components/atoms/BaseTimeInput.vue'

import { useVModel } from '@/utils/hooks'

const props = defineProps<
  ItemWrapperProperty & {
    modelHour?: string
    modelMinute?: string
    /** @description 時間と分のラベル */
    unitLabel: {
      hour: string
      minute: string
    }
  }
>()

const hour = useVModel(props, 'modelHour')
const minute = useVModel(props, 'modelMinute')
</script>
