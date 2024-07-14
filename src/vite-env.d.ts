/// <reference types="vite/client" />

interface ImportMeta {
    readonly env: {
      readonly VITE_SUPABASE_URL: string
      readonly VITE_SUPABASE_ANON_KEY: string
      readonly VITE_SUPABASE_SERVICE_ROLE: string
      [key: string]: string | undefined
    }
  }