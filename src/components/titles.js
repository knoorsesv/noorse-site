import React from 'react'

export const Title = ({ children }) => {
  return (
    <div className={'flex items-center flex-col mb-4'}>
      <h1 className={'mb-4 text-center'}>{children}</h1>
      <div className={'border-b-2 border-black w-60 m-2 text-center'} />
    </div>
  )
}

export const SubTitle = ({ children }) => {
  return <h2 className={`text-center underline mb-4`}>{children}</h2>
}
