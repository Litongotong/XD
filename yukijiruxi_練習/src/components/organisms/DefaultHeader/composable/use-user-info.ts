import { usePageInfoStore } from '@/stores/page-info'
import { useUserInfoStore } from '@/stores/user-info'
import { computed } from 'vue'

export function useUserInfo() {
  const { loadUserInfo } = useUserInfoStore()

  const pageInfo = usePageInfoStore()
  const userInfo = loadUserInfo()

  const userName = computed(() =>
    pageInfo.showUserName && userInfo
      ? userInfo.userFirstName + '　' + userInfo.userGivenName
      : ''
  )

  const companyName = computed(() =>
    pageInfo.showCompanyName && userInfo ? userInfo.companyName : ''
  )

  const departmentName = computed(() =>
    pageInfo.showDepartmentName && userInfo ? userInfo.departmentName : ''
  )

  const loginDate = computed(() =>
    pageInfo.showLoginDate && userInfo ? userInfo.loginDate : ''
  )

  const useDate = computed(() =>
    pageInfo.showUseDate && userInfo ? '運用日:' + userInfo.useDate : ''
  )

  return {
    userName,
    companyName,
    departmentName,
    loginDate,
    useDate,
  }
}
