<template>
  <RouterView />
</template>

<script lang="ts" setup>
import type { UserInfo } from '@/types/user-info-type'

import { useUserInfoStore } from '@/stores/user-info'
import { ViewMode } from './enums'

const { saveUserInfo } = useUserInfoStore()

const initUserInfo: UserInfo = {
  userId: '00001',
  userFirstName: '富士通',
  userGivenName: '太朗',
  userKatakanaName: 'フジツ　タイロ',
  staffCode: '10001',
  companyCode: '2020202',
  companyName: '富士通株式会社',
  departmentName: 'テスト部署',
  factoryCode: '100-200-333',
  warehouseCode: '200-321-111',
  projectCode: '432123',
  departmentCodeLeve3: '3000321',
  departmentCodeLeve4: '4000444',
  roleDistinguish: '01',
  myPostName: '5173',
  clientIpAddress: '192.168.0.0',
  loginDate: '2023/09/02',
  useDate: '2023/09/03',
  mode: ViewMode.NEW,
}

saveUserInfo(initUserInfo)
</script>
