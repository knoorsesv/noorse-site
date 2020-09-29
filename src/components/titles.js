import React from 'react'

export const Title = ({ children }) => {
  return (
    <div className={'flex items-center flex-col mb-4'}>
      <h1 className={'mb-4 text-center'}>{children}</h1>
      <div className={'border-b-2 border-black w-60 m-2 text-center'} />
    </div>
  )
}

export const SectionTitle = ({ children }) => {
  const borderHeight = '16px'
  return (
    <div className={'flex items-start flex-col mb-2'}>
      <h1 className={'text-left mb-0 uppercase'}>
        {children}
        <div
          style={{
            width: '140%',
            position: 'relative',
            top: `-15px`,
            opacity: '30%',
            'border-color': 'transparent transparent green transparent',
            'border-width': `0 ${borderHeight} ${borderHeight} 0`,
            borderStyle: 'solid',
          }}
        />
      </h1>
    </div>
  )
}

export const SubTitle = ({ children }) => {
  return <h2 className={`text-center underline mb-4`}>{children}</h2>
}
