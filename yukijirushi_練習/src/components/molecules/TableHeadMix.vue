<template>
  <TableHead v-if="isNormal" v-bind="props">{{ head }}</TableHead>
  <TableHeadMarked v-else-if="isMarked" v-bind="props" />
</template>

<script setup lang="ts">
import TableHead from '../atoms/TableHead.vue'
import TableHeadMarked from '../atoms/TableHeadMarked.vue'

import type { Table } from '@/types/components'

import { computed } from 'vue'

const props = defineProps<
  Table.HeadCommonProperty & {
    head?: Table.HeadText
    type?: Table.HeadType
    /** @description マーク */
    mark?: string
    background?: string
  }
>()

const isNormal = computed<boolean>(() => !props.type || props.type === 'normal')
const isMarked = computed<boolean>(() => props.type === 'marked')
</script>
