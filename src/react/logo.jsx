import React from 'react'

export const Logo = ({ className, ...args }) => {
  return (
    <img
      alt="Noorse Logo"
      width="64"
      height="64"
      src="https://res.cloudinary.com/dgryvehxf/image/upload/f_auto,q_50,e_blur:1000,c_fit,w_142/neurse/Logo_highres_kpmgsk.png"
      srcSet="
    https://res.cloudinary.com/dgryvehxf/image/upload/f_auto,q_auto,c_fit,w_142/neurse/Logo_highres_kpmgsk.png  142w,
    https://res.cloudinary.com/dgryvehxf/image/upload/f_auto,q_auto,c_fit,w_200/neurse/Logo_highres_kpmgsk.png  200w,
    https://res.cloudinary.com/dgryvehxf/image/upload/f_auto,q_auto,c_fit,w_312/neurse/Logo_highres_kpmgsk.png  312w,
  "
      sizes=" (min-width: 640px) 312px, 200px"
      className={`object-scale-down ${className}`}
      {...args}
    />
  )
}
