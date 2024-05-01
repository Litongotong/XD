export const storageLocal = {
  set<Data = any>(key: string, value: Data): void {
    localStorage.setItem(key, JSON.stringify(value))
  },

  get<Data = object>(key: string): Data | null {
    const value = localStorage.getItem(key)
    return value ? JSON.parse(value) : null
  },

  remove(key: string): void {
    localStorage.removeItem(key)
  },

  clear(): void {
    localStorage.clear()
  },
}

export const storageSession = {
  set<Data = any>(key: string, value: Data): void {
    sessionStorage.setItem(key, JSON.stringify(value))
  },

  get<Data = object>(key: string): Data | null {
    const value = sessionStorage.getItem(key)
    return value ? JSON.parse(value) : null
  },

  remove(key: string): void {
    sessionStorage.removeItem(key)
  },

  clear(): void {
    sessionStorage.clear()
  },
}

export { STORAGE_KEYS } from '@/config'
