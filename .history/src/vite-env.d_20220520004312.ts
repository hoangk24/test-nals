// / <reference types="vite/client" />
declare global {
  namespace NodeJS {
    interface ImportMeta {
      VITE_API_URL: string
      PWD: string
    }
  }
}
