<template>
  <li>
    <div class="tree-item" :class="{ 'no-connector': isRootNode }">
      <label ref="labelRef" class="tree-label">{{ item.name }}</label>
      <BaseTextInput
        class="node-input"
        v-model="value"
        width="50px"
        textAlign="left"
        @on-change="handleChange"
        @on-blur="handleInputBlur"
        ref="textInputRef"
      />
      <ButtonExtend
        v-if="hasChildren"
        button-title="検索"
        button-height="20"
        button-width="34"
        @on-click="handleButtonClick"
      />
    </div>
    <ul>
      <TreeItem
        v-for="childItem in item.children"
        :key="childItem.id"
        :item="childItem"
        :level="level + 1"
        :inject-key="injectKey"
      />
    </ul>
  </li>
</template>

<script setup lang="ts">
import ButtonExtend from '@/components/atoms/ButtonExtend.vue'
import BaseTextInput from '@/components/atoms/BaseTextInput.vue'

import type { SearchTree } from '@/types/components'

import { ref, computed, watch, inject } from 'vue'

const props = withDefaults(
  defineProps<{
    /** @description ツリーアイテムのデータ */
    item: SearchTree.Node
    /** @description ツリーアイテムの階層レベル */
    level: number
    /** @description モデルの値 */
    modelValue?: string | number
    /** @description インジェクトキー */
    injectKey?: Symbol
  }>(),
  {
    modelValue: '',
  },
)

const value = ref<string | number>(props.modelValue)
const isRootNode = computed(() => props.level === 1)

const hasChildren = computed(
  () => props.item.children && props.item.children.length > 0,
)

function handleChange(finalValue: string) {
  console.log('Input end:', finalValue)
}
function handleInputBlur(finalValue: string) {
  console.log('Blur end:', finalValue)
}
function handleButtonClick() {
  console.log('Button clicked')
}

const treeNodeValueChanger = inject<
  (id: number, value: string | number) => void
>(props.injectKey!)

watch(value, (newValue) => {
  treeNodeValueChanger && treeNodeValueChanger(props.item.id, newValue)
})
</script>

<style scoped>
.tree-item {
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: var(--tree-item-margin-bottom);
  list-style-type: none;
  min-height: var(--tree-item-min-height);
  overflow: visible;
}

.tree-item::before {
  content: '';
  position: absolute;
  left: var(--tree-item-before-left);
  width: var(--tree-item-before-width);
  background-color: black;
  top: 0;
  bottom: 50%;
  display: block;
}

.tree-item.no-connector::before {
  display: none;
}

.tree-item.no-connector::after {
  display: none;
}

.tree-item::after {
  content: '';
  position: absolute;
  left: var(--tree-item-before-left);
  width: var(--tree-item-after-width);
  background-color: black;
  top: 50%;
  height: var(--tree-item-before-width);
}

.tree-label {
  position: relative;
  padding-left: var(--tree-item-after-width);
  display: flex;
  align-items: center;
  margin-right: var(--tree-item-margin-bottom);
}

li[data-v-63823678] {
  list-style-type: none !important;
}

.node-input {
  margin-right: var(--tree-item-after-width);
}

button {
  margin-left: var(--tree-item-after-width);
}
</style>
