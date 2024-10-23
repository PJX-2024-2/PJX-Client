/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_REST_API_KEY: string;
  readonly VITE_LOCAL_REDIRECT_URI: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}