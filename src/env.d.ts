/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

// todo: should this be separate from the root /env.d.ts ?

interface ImportMetaEnv {
  readonly CONTENTFUL_SPACE_ID: string
  readonly CONTENTFUL_TOKEN: string
  readonly CONTENTFUL_TOKEN_PREVIEW: string
  readonly CONTENTFUL_ENV: string
  readonly PROD: string
  readonly npm_package_version: string
}

declare module 'astro-imagetools/api'
