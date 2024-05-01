import type { UserInfo } from '@/types/user-info-type'

import { STORAGE_KEYS, storageSession } from '@/utils'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useUserInfoStore = defineStore('userInfo', () => {
  /** @description ユーザー情報 */
  const userInfo = ref<UserInfo | null>(
    storageSession.get<UserInfo>(STORAGE_KEYS.USER_INFORMATION_KEY),
  )

  function loadUserInfo(): UserInfo | null {
    const info = storageSession.get<UserInfo>(STORAGE_KEYS.USER_INFORMATION_KEY)
    userInfo.value = info
    return info
  }

  function saveUserInfo(data: UserInfo): void {
    storageSession.set<UserInfo>(STORAGE_KEYS.USER_INFORMATION_KEY, data)
    userInfo.value = data
  }

  function removeUserInfo(): void {
    storageSession.remove(STORAGE_KEYS.USER_INFORMATION_KEY)
    userInfo.value = null
  }

  /** ユーザーデータ */
  const userData = ref<Record<string, any> | null>(
    storageSession.get<Record<string, any>>(STORAGE_KEYS.USER_DATA_KEY),
  )

  /**
   * ユーザーデータをセッションストレージから取得
   * @returns ユーザーデータ
   */
  function loadUserData(): Record<string, any> | null {
    const data = storageSession.get<Record<string, any>>(
      STORAGE_KEYS.USER_DATA_KEY,
    )

    userData.value = data
    return data
  }

  /**
   * ユーザーデータをセッションストレージに保存
   * @param data ユーザーデータ
   */
  function saveUserData(data: Record<string, any>): void {
    storageSession.set<Record<string, any>>(STORAGE_KEYS.USER_DATA_KEY, data)
    userData.value = data
  }

  /** ユーザーデータをセッションストレージから削除 */
  function removeUserData(): void {
    storageSession.remove(STORAGE_KEYS.USER_DATA_KEY)
    userData.value = null
  }

  const useCaseID = ref<string>('')

  /**
   * ユーザーデータにデータを入れる
   * @param key
   * @param value
   */
  const putUserData = (key: string, value: any) => {
    const currentData = loadUserData()
    const newItem = { [`${useCaseID.value}_${key}`]: value }
    const newData = { ...currentData, ...newItem }

    // TODO: 旧ソースに特定の保存を保存しない操作がある

    saveUserData(newData)
  }

  /**
   * ユーザーデータからデータを取得
   * @param key 目標データの key
   * @returns ユーザーデータから取得した目標データ
   */
  const getUserData = (key: string) => {
    const assembledKey = `${useCaseID.value}_${key}`
    const data = loadUserData()

    if (!data) {
      // FIXME: エラー処理は旧仕様に準ずる必要がある
      console.warn('The target data is not within the user data.')
      return
    }

    return data[assembledKey]
  }

  /**
   * 運用日付を取得する。
   * @returns 運用日付
   */
  function getUseDate(): string | null {
    const userInfo = loadUserInfo()
    return userInfo ? userInfo.useDate : null
  }

  /**
   * 新規モードであるかどうか
   * @returns 新規モードであるかどうか
   */
  const isCreateMode = computed(
    // FIXME: モードの列挙型化が必要
    () => userInfo.value?.mode === '1',
  )

  return {
    userInfo,
    loadUserInfo,
    saveUserInfo,
    removeUserInfo,

    userData,
    loadUserData,
    saveUserData,
    removeUserData,
    putUserData,
    getUserData,

    getUseDate,
    isCreateMode,
  }
})
