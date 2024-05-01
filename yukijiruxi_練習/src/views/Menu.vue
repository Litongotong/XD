<template>
  <div id="menu">
    <button
      v-for="item in list"
      :key="item.name"
      @click="() => handleClick(item)"
    >
      {{ item.name }}
    </button>
  </div>
</template>

<script setup lang="ts">
import type { RouteRecordRaw } from 'vue-router'
import pages from '@/router/routes/modules/pages'

const list = pages.children as RouteRecordRaw[]

function handleClick(item: RouteRecordRaw) {
  const base = new URL(import.meta.env.VITE_BASE_URI, window.location.origin)
  const url = new URL(item.path, base)
  window.open(url, '', 'popup=true,width=1046px,height=684px')
}
</script>

<style scoped>
#menu {
  background: #888;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 5rem;
  height: 100vh;
}

#menu button {
  height: 3rem;
  width: 15rem;
}
</style>
