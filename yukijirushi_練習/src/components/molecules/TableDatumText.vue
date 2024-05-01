<template>
  <TableDatum v-bind="props" :text-align="computedTextAlign">
    {{ computedDatum }}
  </TableDatum>
</template>

<script setup lang="ts">
import TableDatum from '@/components/atoms/TableDatum.vue'

import type { Table } from '@/types/components'
import type { CSS } from '@/types'

import { separateNumberComma } from '@/utils'
import { computed } from 'vue'
import { RegexpRules } from '@/utils/regexp-rules'

const props = withDefaults(
  defineProps<
    Table.DatumCommonProperty & {
      /** @description データム */
      datum?: string | number | boolean
      /** @description カンマで数字を分割するか */
      commaNumber?: boolean
      /** @description 文字の水平位置 */
      textAlign?: CSS.TextAlign
      /** @description 小数部に使用する最大桁数 */
      maximumFractionDigits?: number
      /** @description 小数部に使用する最小桁数 */
      minimumFractionDigits?: number
    }
  >(),

  { commaNumber: true },
)

const isNumber = computed<boolean>(
  () =>
    props.datum?.toString() !== '' &&
    RegexpRules.COMMA_SEPARATED_NUMBER.test(props.datum?.toString() ?? ''),
)

const computedDatum = computed<string | number | boolean | undefined>(() => {
  if (isNumber.value && props.commaNumber) {
    return separateNumberComma(
      Number(props.datum),
      props.minimumFractionDigits,
      props.maximumFractionDigits,
    )
  }

  return props.datum
})

const computedTextAlign = computed<CSS.TextAlign>(() => {
  let align: CSS.TextAlign = isNumber.value ? 'right' : 'left'

  if (props.textAlign) {
    align = props.textAlign
  }

  return align
})
</script>
