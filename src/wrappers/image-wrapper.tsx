import type { FC } from 'react'

export const ImageWrapper: FC<{
  id?: string
  alt?: string // todo: these are just html <img props, should find them from somewhere else
  loading?: 'eager' | 'lazy' // todo: these are just html <img props, should find them from somewhere else
  className?: string // todo: these are just html <img props, should find them from somewhere else
  image?: {
    responsiveURL?: string
    fields?: { file: { url: string } }
    file: { url: string }
  }
  src?: string
  srcSet?: string
}> = ({ image, src, srcSet, ...attrs }) => {
  if (import.meta.env?.STORYBOOK) {
    return <DummyImage {...attrs} src={src} />
  }

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

export const DummyImage: FC<{
  image?: {
    src?: string
    responsiveURL?: string
    fields?: { file: { url: string } }
    file: { url: string }
    height?: number
    width?: number
  }
  className?: string
  imgClassName?: string
  src?: string
  srcSet?: string
}> = (attrs) => {
  const { image, src, className, imgClassName, ...rest } = attrs
  return (
    <img
      src={
        src?.replace('../images/', '/') ||
        image?.src ||
        `https://placekitten.com/${image?.height}/${image?.width}`
      }
      alt="Some cat"
      className={`not-prose ${imgClassName || 'h-full w-full'} ${className}`}
      {...rest}
    />
  )
}
