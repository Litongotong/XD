<template>
  <div class="header">
    <div class="page-name">
      <BasePageTitle :pageName="pageInfo.pageName" />
    </div>

    <div class="page-id">
      <TextPageID :pageId="pageInfo.pageId" />
    </div>

    <div class="company-name">
      <BaseText :label="userInfo.companyName" />
    </div>

    <div class="department-name">
      <BaseText :label="userInfo.departmentName" />
    </div>

    <div class="login-date">
      <BaseText :label="userInfo.loginDate" />
    </div>

    <div class="user-name">
      <BaseText :label="userInfo.userName" />
    </div>

    <div class="use-date">
      <TextPageID :pageId="userInfo.useDate" />
    </div>

    <div class="header-button-groupe">
      <HeaderButtonGroup />
    </div>
  </div>
</template>

<script lang="ts" setup>
import BasePageTitle from '@/components/atoms/BasePageTitle.vue'
import BaseText from '@/components/atoms/BaseText.vue'
import HeaderButtonGroup from '@/components/molecules/HeaderButtonGroup.vue'
import TextPageID from '@/components/molecules/TextPageID.vue'

import { reactive } from 'vue'
import { usePageInfo, useUserInfo } from './composable'

//ログインユーザー情報
const userInfo = reactive(useUserInfo())
//画面情報
const pageInfo = reactive(usePageInfo())
</script>

<style scoped>
.header {
  height: 100%;
  box-sizing: border-box;
  position: relative;
}
.page-name {
  width: 506px;
  position: absolute;
  left: 16px;
  top: 8px;
}
.page-id {
  width: 504px;
  position: absolute;
  left: 16px;
  top: 48px;
}
.company-name {
  width: 280px;
  position: absolute;
  left: 528px;
  top: 0px;
}
.department-name {
  width: 280px;
  position: absolute;
  left: 528px;
  top: 24px;
}
.login-date {
  width: 152px;
  position: absolute;
  left: 832px;
  top: 0px;
}
.user-name {
  width: 152px;
  position: absolute;
  left: 832px;
  top: 24px;
}
.use-date {
  width: 136px;
  position: absolute;
  left: 528px;
  top: 48px;
}
.header-button-groupe {
  height: 24px;
  position: absolute;
  left: 664px;
  top: 48px;
}
</style>
