import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

export const Logo = ({ className }) => {
  return (
    <Link
      to={'/'}
      className={`${className} h-full w-full max-w-full max-h-full flex flex-col items-center`}
    >
      <StaticImage
        src="../images/Logo_highres.png"
        id="logo"
        alt={'Noorse Logo'}
        objectFit="contain"
        className={`h-full w-full max-w-full max-h-full`}
      />
    </Link>
  )
}
