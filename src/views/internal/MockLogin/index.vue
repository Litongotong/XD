<template>
  <Layout>
    <!-- ユーザーID -->
    <span class="user-id-label">ユーザーID：</span>
    <input type="text" class="user-id-value" v-model="inputUserName" />

    <!-- パスワード -->
    <span class="password-label">パスワード：</span>
    <input type="password" class="password-value" v-model="inputPassword" />

    <!-- 運用日 -->
    <span class="usage-date-label">運用日：</span>
    <input class="usage-date-value" v-model="inputUsageDate" />

    <!-- ボタン -->
    <button class="button-login" @click="loginButtonClick">ログイン</button>
    <button class="button-close" @click="closeButtonClick">閉じる</button>

    <!-- エラーメッセージ -->
    <span v-if="message" class="message-context">{{ message }}</span>
  </Layout>
</template>

<script lang="ts" setup>
import type { IResponse, ISyncResponse } from '@/services/interface'

import Layout from '../Layout/index.vue'

import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { loginPage_login } from '@/services/syncRequest/LoginPage/login'
import { closeBrowser } from '@/utils/browser'
import { storage } from '@/utils/browser/storage'
import { TOKEN_KEY } from '@/services/axios/token'

const router = useRouter()

const inputUserName = ref('')
const inputPassword = ref('')
const inputUsageDate = ref('')
let message = ref('')

const loginButtonClick = (): void => {
  const apiResponseData: ISyncResponse<IResponse> = loginPage_login({
    cdUserId: inputUserName.value,
    ifPassword: inputPassword.value,
    nmHost: 'DESKTOP-',
    stTammatsu: '01',
    commonMsg: { unyobi: inputUsageDate.value },
  })

  if (apiResponseData.status == 200) {
    /** @description ストレージにtokenデータを保存する */
    storage.setSessionData({
      key: TOKEN_KEY,
      value: apiResponseData.data.result.payloadToken.jwt,
    })

    /** @description ストレージにUserInfoデータを保存する */
    storage.setSessionData({
      key: 'userInfo',
      value: apiResponseData.data.payload.commonMsg,
    })

    //サブメニュー画面遷移
    router.push('/menu')
  } else if (apiResponseData.status == 401) {
    message.value = apiResponseData.data.result.message[0].substring(13)
  }
}

const closeButtonClick = () => {
  closeBrowser()
}
</script>

<style scoped>
.user-id-label {
  position: absolute;
  align-items: center;
  display: flex;
  left: 184px;
  top: 176px;
  height: 24px;
}

.user-id-value {
  position: absolute;
  left: 284px;
  top: 176px;
  height: 24px;
  width: 200px;
}

.password-label {
  position: absolute;
  align-items: center;
  display: flex;
  left: 184px;
  top: 232px;
  height: 24px;
}

.password-value {
  position: absolute;
  left: 284px;
  top: 232px;
  height: 24px;
  width: 200px;
}

.usage-date-label {
  position: absolute;
  align-items: center;
  display: flex;
  left: 184px;
  top: 288px;
  height: 24px;
}

.usage-date-value {
  position: absolute;
  left: 284px;
  top: 288px;
  height: 24px;
  width: 200px;
}

.button-login {
  position: absolute;
  left: 284px;
  top: 388px;
  height: 24px;
  width: 80px;
}

.button-close {
  position: absolute;
  left: 384px;
  top: 388px;
  height: 24px;
  width: 80px;
}

.message-context {
  position: absolute;
  top: 620px;
  color: red;
}
</style>
