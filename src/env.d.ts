/// <reference types="astro/client" />

// todo: should this be separate from the root /env.d.ts ?

// eslint-disable-next-line no-unused-vars
interface ImportMetaEnv {
  readonly CONTENTFUL_SPACE_ID: string
  readonly CONTENTFUL_TOKEN: string
  readonly CONTENTFUL_TOKEN_PREVIEW: string
}

// declare module '*vv-responses.json' {
//   const value: { haha: string }
//   export value
// }

declare module 'date-fns/locale/index.js'
