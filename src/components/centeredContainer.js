import React from 'react'

export const Container = ({ children }) => {
  return (
    <div className={'flex flex-col items-center'}>
      <div className={'md:px-6 lg:px-12 md:my-5 w-full md:w-5/6 xl:w-3/5'}>
        {children}
      </div>
    </div>
  )
}
