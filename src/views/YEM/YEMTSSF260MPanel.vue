<!--一時的追加 ログイン検証用テスト画面  -->
<template>
  <Layout>
    <div :style="layoutStyle">
      <div :style="contentStyle">
        <span class="nm-kai-sha">{{ loginDataInfo?.nmKaisha }}</span>
        <span class="tm-login">{{ loginDataInfo?.tmLogin.slice(0, 8) }}</span>
        <span class="nm-busho">{{ loginDataInfo?.nmBusho }}</span>
        <span class="nm-user-namae">{{ loginDataInfo?.nmUserNamae }}</span>
        <button @click="callApi" class="call-api">API呼び出す</button>
        <button @click="returnMenu" class="return-menu">メニュー戻る</button>
      </div>
    </div>
  </Layout>
</template>

<script lang="ts" setup>
import Layout from '../internal/Layout/index.vue'

import { YEMTSSF260M_getTokubaiSettei } from '@/services/syncRequest/YEM/YEMTSSF260/YEMTSSF260M'
import type { CSSProperties } from 'vue'
import { useRouter } from 'vue-router'
import { storage } from '@/utils/browser/storage'

const router = useRouter()

interface UserInfo {
  nmUserNamae: string
  nmKaisha: string
  nmBusho: string
  tmLogin: string
}

/** @description ストレージからUserInfoデータを取得する */
const loginDataInfo: UserInfo | null = storage.getSessionData({
  key: 'userInfo',
})
const sendMsg: any = {
  commonMsg: {
    cdKaisha: '1001',
    dtUnyo: '20230101',
    qtSaidaiKensaku: '100',
    qtSaidaiHyouji: '50',
    qtHyoujiPage: '1',
    qtHyoujiZumi: '1',
  },

  TokubaiSetteiJokenCBMMsg: {
    cdChoaisaki: '000002',
    cdChain: '000008',
    cdShokuba: '000001',
    cdTantosha: '000000001',
    stTokubaiKeisanHoho: '10',
    dtNengetsu: '202310',
  },
}

function callApi() {
  const recevieMsg = YEMTSSF260M_getTokubaiSettei(sendMsg)

  if (recevieMsg.status == 200) {
    console.log('正常終了', recevieMsg.data)
  }

  if (recevieMsg.status == 403) {
    console.log('エラー終了', recevieMsg.data)
    window.alert('トークンテーブルにトークンが存在しません。')
    router.push('/')
    storage.clearSessionData()
  }
}

function returnMenu() {
  //サブメニュー画面遷移
  router.push('/menu')
}

const layoutStyle: CSSProperties = {
  position: 'relative',
  display: 'grid',
  width: '100%',
  height: '100%',
  gridTemplateRows: 'auto 1fr auto',
  gridTemplateColumns: '1fr',
  backgroundColor: '#000',
  gap: '1.5px',
}

const commonStyle: CSSProperties = {
  position: 'relative',
  backgroundColor: '#fff',
}

const contentStyle: CSSProperties = {
  ...commonStyle,
  height: '100%',
  width: '100%',
  gridArea: '2 / 1 / 3 / 2',
}
</script>

<style scoped>
.nm-kai-sha {
  position: absolute;
  left: 170px;
  top: 150px;
  height: 24px;
  width: 224px;
}

.tm-login {
  position: absolute;
  left: 401px;
  top: 150px;
  height: 24px;
  width: 100px;
}

.nm-busho {
  position: absolute;
  left: 170px;
  top: 180px;
  height: 24px;
  width: 224px;
}

.nm-user-namae {
  position: absolute;
  left: 401px;
  top: 180px;
  height: 24px;
  width: 100px;
}

.call-api {
  position: absolute;
  left: 284px;
  top: 260px;
  height: 24px;
  width: 100px;
}

.return-menu {
  position: absolute;
  left: 284px;
  top: 336px;
  height: 24px;
  width: 100px;
}
</style>
