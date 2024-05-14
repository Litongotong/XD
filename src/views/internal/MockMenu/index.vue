<template>
  <Layout>
    <div class="menu">
      <div class="col">
        <template v-if="devPageIDList.length">
          <button @click="goDevPage(id)" v-for="id of devPageIDList" :key="id">
            {{ id }}
          </button>
        </template>
        <button @click="DEV">DEV</button>
      </div>
      <div class="col">
        <template v-if="isDebug">
          <button @click="YBMKKSF620">YBMKKSF620</button>
          <button @click="YCSCMNF010">YCSCMNF010</button>
          <button @click="startSystem">START SYSTEM</button>
        </template>
        <button @click="TEST">部品テスト</button>
        <button @click="TESTPAGE">ログイン検証用テスト画面</button>
        <!-- NOTE: 二重ログインを防ぐため、一時的にログアウト処理追加する -->
        <button @click="LOGOUT">LOGOUT</button>
      </div>
    </div>
  </Layout>
</template>

<script setup lang="ts">
import Layout from '../Layout/index.vue'

import { useRouter } from 'vue-router'
import { loginPage_logout } from '@/services/syncRequest/LoginPage/login'
import { useView } from '@/routes/view/useView'
import { storage } from '@/utils/browser/storage'
import { MsisDebug } from '@/utils/debug/log'

const router = useRouter()
const view = useView()

const isDebug = MsisDebug.isDebug()

const startSystem = async () => {
  await view.system.toggleSubsystem('YCSCMNF0100')
}

const YBMKKSF620 = () => {
  router.replace(`/view/YBMKKSF620`)
}
const DEV = () => {
  router.replace(`/dev`)
}

const TEST = () => {
  router.replace(`/dev-test`)
}
const TESTPAGE = () => {
  router.replace(`/test-page`)
}

const YCSCMNF010 = () => {
  router.replace(`/view/YCSCMNF010`)
}

interface UserInfo {
  cdUser: string
  cdKaisha: string
}

/** @description ストレージからUserInfoデータを取得する */
const loginDataInfo: UserInfo | null = storage.getSessionData({
  key: 'userInfo',
})

// NOTE: 二重ログインを防ぐため、一時的にログアウト処理追加する
const LOGOUT = () => {
  loginPage_logout({
    commonMsg: {
      cdUser: loginDataInfo?.cdUser ?? '',
      cdKaisha: loginDataInfo?.cdKaisha ?? '',
    },
    stTammatsu: '01',
  })
}

const goDevPage = (id: string) => {
  router.replace({
    path: `/dev`,
    query: {
      c: id,
    },
  })
}

const devPageIDList = [
  'YBMKKSF620',
  'YBMKKSF621',
  'YBMKKSF624',
  'YBMKKSF625',
  'YBMKKSF626',
  'YBMKKSF627',
]
</script>

<style scoped>
.menu {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.col {
  display: flex;
  flex-direction: column;
}
.col + .col {
  margin-left: 30px;
}
.col button {
  padding: 10px 20px;
}
.col button + button {
  margin-top: 10px;
}
</style>
