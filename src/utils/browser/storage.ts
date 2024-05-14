/** 仮ログイン画面でのために、一時的に追加 */
export interface StorageMethodOptions<Value> {
  key: string
  value: Value
}

export type StorageItemKey<Value> = Pick<StorageMethodOptions<Value>, 'key'>

export const storage = {
  // Session Storage
  setSessionData: <Value>(payload: StorageMethodOptions<Value>) => {
    setStorageData(sessionStorage, payload)
  },

  getSessionData: <Value>(payload: StorageItemKey<Value>) => {
    return getStorageData(sessionStorage, payload)
  },

  removeSessionData: <Value>(payload: StorageItemKey<Value>) => {
    removeStorageData(sessionStorage, payload)
  },

  clearSessionData: () => {
    clearStorageData(sessionStorage)
  },

  // Local Storage
  setLocalData: <Value>(payload: StorageMethodOptions<Value>) => {
    setStorageData(localStorage, payload)
  },

  getLocalData: <Value>(payload: StorageItemKey<Value>) => {
    return getStorageData(localStorage, payload)
  },

  removeLocalData: <Value>(payload: StorageItemKey<Value>) => {
    removeStorageData(localStorage, payload)
  },

  clearLocalData: () => {
    clearStorageData(localStorage)
  },
}

type Storage = typeof localStorage | typeof sessionStorage

export const setStorageData = <StorageValue>(
  storage: Storage,
  options: StorageMethodOptions<StorageValue>,
) => {
  if (typeof options.value === 'object') {
    storage.setItem(options.key, JSON.stringify(options.value))
  } else {
    storage.setItem(options.key, options.value as unknown as string)
  }
}

export const getStorageData = <StorageValue>(
  storage: Storage,
  options: StorageItemKey<StorageValue>,
): StorageValue | null => {
  try {
    const value = storage.getItem(options.key)
    return JSON.parse(value ?? '{}')
  } catch {
    return null
  }
}

export const removeStorageData = <StorageValue>(
  storage: Storage,
  options: StorageItemKey<StorageValue>,
) => {
  storage.removeItem(options.key)
}

export const clearStorageData = (storage: Storage) => {
  storage.clear()
}
