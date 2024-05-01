<template>
  <ItemWrapper v-bind="props" class="button-group-select-all">
    <ButtonGroup :buttons="buttons" />
  </ItemWrapper>
</template>

<script lang="ts" setup>
import ButtonGroup from '@/components/molecules/ButtonGroup.vue'
import ItemWrapper from '@/components/atoms/ItemWrapper.vue'

import type { ItemWrapperProperty, Button } from '@/types/components'

const props = defineProps<
  ItemWrapperProperty & {
    /** @description ボタンの設定 */
    buttons?: Button.Config[]
  }
>()
</script>
<style scoped>
.button-group-select-all {
  gap: var(--button-gap);
}
</style>
