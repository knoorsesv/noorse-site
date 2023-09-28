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
    return (
      <StaticImage
        id={'background-image'}
        alt={'Luchtfoto Noorse velden'}
        loading={'eager'}
        objectfit="cover"
        objectposition="center"
        src="../images/noorse_aerial.png"
        className={`h-full max-h-full w-full max-w-full`}
      />
    )
  }
  if (attrs.src && attrs.src === '../images/sport-vlaanderen.jpg') {
    return (
      <StaticImage
        src="../images/sport-vlaanderen.jpg"
        id="sport-vlaanderen-logo"
        alt={'Sport Vlaanderen Logo'}
        objectfit={'contain'}
        loading="lazy"
        className={`h-full max-h-full w-full max-w-full large:max-w-[500px]`}
      />
    )
  }
  // eslint-disable-next-line jsx-a11y/alt-text
  return <GatsbyImage {...attrs} />
}

export const DummyImage = (attrs) => {
  const { image, src, className, imgClassName, ...rest } = attrs
  // console.log('DummyImage attrs', attrs);
  return (
    <img
      src={
        src?.replace('../images/', '/') ||
        image?.src ||
        `https://placekitten.com/${image.height}/${image.width}`
      }
      alt="Some cat"
      className={`not-prose ${imgClassName || 'w-full h-full'} ${className}`}
      {...rest}
    />
  )
}
