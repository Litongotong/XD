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
  </Layout>
</template>

<script lang="ts" setup>
import type { IResponse } from '@/services/interface'

import Layout from '../Layout/index.vue'

import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { loginPage_login } from '@/services/syncRequest/LoginPage/login'

const router = useRouter()

const inputUserName = ref('')
const inputPassword = ref('')
const inputUsageDate = ref('')

const loginButtonClick = async (): Promise<void> => {
  const apiResponseData: IResponse = await loginPage_login({
    cdUserId: inputUserName.value,
    ifPassword: inputPassword.value,
    nmHost: 'DESKTOP-',
    stTammatsu: '01',
    commonMsg: { unyobi: inputUsageDate.value },
  })

  if (apiResponseData.result.completed) {
    window.alert('正常登録')
    router.push('/')
  }
}

const closeButtonClick = () => {
  router.push('/')
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
</style>
