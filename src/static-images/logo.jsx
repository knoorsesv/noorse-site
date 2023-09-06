import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

export const Logo = ({ className }) => {
  return (
    <Link
      to={'/'}
      className={`${className} flex h-full max-h-full w-full max-w-full flex-col items-center`}
    >
      <StaticImage
        src="../images/Logo_highres.png"
        placeholder={'tracedSVG'}
        alt={'Noorse Logo'}
        objectFit="contain"
        className={`h-full max-h-full w-full max-w-full`}
      />
    </Link>
  )
}
