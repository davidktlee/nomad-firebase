/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_API_KEY: string
  authDomain: string
  databaseURL?: string
  projectId: string
  storageBucket: string
  messagingSenderId: number
  appId: string
  measurementId?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
