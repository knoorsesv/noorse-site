import React from 'react'

export const Title = ({ children }) => {
  return <h1 className={'title mb-8'}>{children}</h1>
}

export const SubTitle = ({ children }) => {
  return (
    <h2 className={`text-center underline font-light text-lg mb-4`}>
      {children}
    </h2>
  )
}
