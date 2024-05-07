<template>
  <Layout>
    <div class="center">
      <button @click="YBMKKSF620">YBMKKSF620</button>
      <button @click="YCSCMNF010">YCSCMNF010</button>
      <button @click="startSystem">START SYSTEM</button>
      <button @click="DEV">DEV</button>
      <button @click="LOGIN">LOGIN PAGE</button>
      <!-- NOTE: 二重ログインを防ぐため、一時的にログアウト処理追加する -->
      <button @click="LOGOUT">LOGOUT</button>
    </div>
  </Layout>
</template>

<script setup lang="ts">
import Layout from '../Layout/index.vue'

import { useRouter } from 'vue-router'
import { loginPage_logout } from '@/services/syncRequest/LoginPage/login'
import { useView } from '@/routes/view/useView';

const router = useRouter()
const view = useView()

const startSystem = async () => {
  await view.system.toggleSubsystem('YCSCMNF0100')
}

const YBMKKSF620 = () => {
  router.replace(`/view/YBMKKSF620`)
}
const DEV = () => {
  router.replace(`/dev`)
}
const LOGIN = () => {
  router.replace(`/login-page`)
}
const YCSCMNF010 = () => {
  router.replace(`/view/YCSCMNF010`)
}

// NOTE: 二重ログインを防ぐため、一時的にログアウト処理追加する
const LOGOUT = () => {
  loginPage_logout({
    commonMsg: {
      cdUser: 'caz38741',
      cdKaisha: 'password',
    },
  })
}
</script>

<style scoped>
.center {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.center button {
  padding: 10px 20px;
}
.center button + button {
  margin-top: 10px;
}
</style>
