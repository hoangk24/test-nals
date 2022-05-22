// / <reference types="vite/client" />
declare global {
  namespace NodeJS {
    interface ImportMeta {
      GITHUB_AUTH_TOKEN: string
      NODE_ENV: 'development' | 'production'
      PORT?: string
      PWD: string
    }
  }
}
