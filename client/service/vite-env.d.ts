/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

interface ImportMetaEnv {
  readonly MODE: 'production' | 'development';
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
