import React from 'react'

export const Header = ({ children }) => {
  return <h1 className={'title mb-8'}>{children}</h1>
}

export const SubHeader = ({ children }) => {
  return (
    <h2 className={`text-center underline font-light text-lg mb-4`}>
      {children}
    </h2>
  )
}
