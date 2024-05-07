<template>
  <ItemProvider>
    <Inner v-bind="$attrs">
      <slot></slot>
    </Inner>
  </ItemProvider>
</template>

<script setup lang="ts">
/**
 * Don't modify this file. It auto generated.
 */

import ItemProvider from '@/components/jcf/utils/ItemProvider/index.vue'
import Inner from '@/components/jcf/JCFTextArea/index.vue'
</script>
