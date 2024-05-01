<template>
  <TextLabelValue
    label="メッセージコード"
    label-width="168"
    :text-value1="logic.messageCode"
    label-background="rgb(255, 175, 175)"
    label-font-weight="bold"
    :is-show-border-line="true"
    border-line-width="472"
    content-color="rgb(255, 0, 0)"
    content-font-weight="bold"
    x="184"
    y="136"
  />
  <TextLabelValue
    label="詳細"
    label-width="168"
    :text-value1="logic.errorDetail"
    label-background="rgb(255, 175, 175)"
    label-font-weight="bold"
    :is-show-border-line="true"
    border-line-width="472"
    border-line-height="40"
    content-color="rgb(255, 0, 0)"
    content-font-weight="bold"
    x="184"
    y="176"
  />
  <TextLabelValue
    label="発生日時"
    label-width="168"
    :text-value1="logic.errorDate"
    label-background="rgb(255, 175, 175)"
    label-font-weight="bold"
    :is-show-border-line="true"
    border-line-width="472"
    content-color="rgb(255, 0, 0)"
    content-font-weight="bold"
    x="184"
    y="232"
  />
</template>
<script setup lang="ts">
import TextLabelValue from '@/components/atoms/TextLabelValue.vue'

import useYCSCMNF070MLogic from './YCSCMNF070M-logic'
import { reactive } from 'vue'

const logic = reactive(useYCSCMNF070MLogic())
</script>
