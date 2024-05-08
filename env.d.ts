/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Vite config option: base */
  readonly VITE_BASE_URI: string

  // [[API]]
  // API origin
  VITE_BACKEND_ORIGIN: string
  // API common URI
  VITE_API_COMMON_URI: string
  // Axios option: baseURL
  readonly VITE_AXIOS_BASE_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
