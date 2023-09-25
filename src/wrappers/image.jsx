import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'

export const ImageWrapper = (attrs) => {
  console.log('attrs', attrs)
  return import.meta.env?.STORYBOOK ? (
    <DummyImage {...attrs} />
  ) : (
    // eslint-disable-next-line jsx-a11y/alt-text
    <GatsbyImage {...attrs} />
  )
}

export const DummyImage = (attrs) => {
  console.log(attrs)
  const { image } = attrs
  return (
    <img
      src={`https://placekitten.com/${image.height}/${image.width}`}
      alt="Some cat"
      className="w-full h-full"
    />
  )
}
