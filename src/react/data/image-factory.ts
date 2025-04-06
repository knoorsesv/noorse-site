import type { Image } from '../types/image'
import type { Factory } from './factory'

export const imageFactory: Factory<Image> = (attrs) => ({
  height: 100 + Math.round(Math.random() * 100),
  width: 100 + Math.round(Math.random() * 100),
  images: { fallback: { src: '' } },
  ...attrs,
})
