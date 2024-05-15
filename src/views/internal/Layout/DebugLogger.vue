<template>
  <div v-if="show" class="box">
    <div class="title">LOGIC DEBUG LOG</div>
    <div class="list">
      <div class="log" v-for="log in losList" :key="log">{{ log }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Log } from '@/utils/log'
import { onMounted, onUnmounted, ref } from 'vue'
const losList = Log._allQueue || []
const show = ref(false)

const trigger = () => {
  // listen cmd + k / ctrl + k
  const func = (e: KeyboardEvent) => {
    if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
      show.value = !show.value
    }
  }
  onMounted(() => {
    window.addEventListener('keydown', func)
  })
  onUnmounted(() => {
    window.removeEventListener('keydown', func)
  })
}
trigger()
</script>

<style scoped>
.box {
  position: fixed;
  right: 10px;
  bottom: 10px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  border: 1px solid #000;
  overflow: hidden;
  width: 40vw;
  padding: 5px;
  background-color: #fff;
  z-index: 9999;
}
.title {
  font-size: 13px;
  font-weight: bold;
  padding: 0 0 5px 0;
  display: flex;
  justify-content: center;
}
.list {
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: 50vh;
  width: 100%;
  font-size: 12px;
  padding: 0 3px;
}
.log {
  word-break: break-all;
  border-bottom: 1px dashed rgba(0, 0, 0, 0.5);
  padding: 5px 0;
}
</style>
