import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import React from 'react'

export const ImageWrapper = (attrs) => {
  if (import.meta.env?.STORYBOOK) {
    return <DummyImage {...attrs} />
  }

  // WTF Gatsby:
  // https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-plugin-image/#restrictions-on-using-staticimage
  // cant pass in attrs, so lets just hardcode these until we ditch Gatsby
  if (attrs.src && attrs.src === '../images/noorse_aerial.png') {
    // eslint-disable-next-line jsx-a11y/alt-text
    return (
      <StaticImage
        id={'background-image'}
        alt={'Luchtfoto Noorse velden'}
        loading={'eager'}
        objectFit="cover"
        objectPosition="center"
        src="../images/noorse_aerial.png"
        className={`h-full max-h-full w-full max-w-full`}
      />
    )
  }
  // eslint-disable-next-line jsx-a11y/alt-text
  return <GatsbyImage {...attrs} />
}

export const DummyImage = (attrs) => {
  const { image } = attrs
  return (
    <img
      src={
        attrs.src.replace('../images/', '/') ||
        `https://placekitten.com/${image.height}/${image.width}`
      }
      alt="Some cat"
      className="w-full h-full"
    />
  )
}
