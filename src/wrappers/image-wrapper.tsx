import type { ComponentProps, FC } from 'react'

export const ImageWrapper: FC<
  {
    id?: string
    alt?: string // todo: these are just html <img props, should find them from somewhere else
    loading?: 'eager' | 'lazy' // todo: these are just html <img props, should find them from somewhere else
    className?: string // todo: these are just html <img props, should find them from somewhere else
    fetchpriority?: string // todo: these are just html <img props, should find them from somewhere else
    image?: {
      responsiveURL?: string
      fields?: { file: { url: string } }
      file?: { url: string }
    }
    src?: string
    srcSet?: string
  } & ComponentProps<'img'>
> = ({ image, src, srcSet, ...attrs }) => {
  // todo: not all fields are mapped in the contentful calls, keeping both options for now
  // should be linted on the ImageWrapper, the alt tag is passed from theres
  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <img
      srcSet={src || srcSet}
      src={
        image?.responsiveURL ||
        image?.fields?.file.url ||
        image?.file?.url ||
        src
      }
      {...attrs}
    />
  )
}
