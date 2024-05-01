<template>
  <div class="sample-wrapper" style="left: 0; top: 0">
    <DateInputYMD type="month" v-model="itemid01" />
  </div>

  <div class="sample-wrapper" style="left: 20rem; top: 0">
    <BaseText label="*　工場名：" />
    <BaseDropdown />
  </div>

  <div class="sample-wrapper" style="left: 70rem; top: 0">
    <ButtonGroup :buttonConfigs="logic.buttonConfigs" />
  </div>

  <TableCommon
    x="1rem"
    y="6rem"
    maxHeight="40rem"
    width="95vw"
    :checkable="true"
    :checkedColumnHead="{ id: '00', head: ['費用', '入力'] }"
    :heads="logic.heads"
    :list="logic.data"
  />
</template>

<script setup lang="ts">
import BaseText from '@/components/atoms/BaseText.vue'
import DateInputYMD from '@/components/atoms/DateInputYMD.vue'
import BaseDropdown from '@/components/atoms/BaseDropdown.vue'
import ButtonGroup from '@/components/molecules/ButtonGroup.vue'
import TableCommon from '@/components/molecules/TableCommon.vue'

import useYPMGNSF330MLogic from './YPMGNSF330M-logic'
import { onMounted, reactive, ref, watch } from 'vue'

const logic = reactive(useYPMGNSF330MLogic())

const itemid01 = ref()
const itemid02 = ref()

watch([itemid01, itemid02], (a, b) => console.log({ a, b }))
</script>

<style scoped>
.sample-wrapper {
  align-items: center;
  display: flex;
  gap: 1rem;
  margin: 1rem 0 0;
  position: absolute;
}
</style>
