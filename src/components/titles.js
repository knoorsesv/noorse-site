import React from 'react'

export const Title = ({ children }) => {
  return (
    <div className={'mb-4 flex flex-col items-center'}>
      {/* todo: this should not be an h1, but now it has implicit typography styling so just changing to h2 breaks the styling */}
      <h1 className={'mb-4 text-center'}>{children}</h1>
      <div className={'m-2 w-[60%] border-b-2 border-black text-center'} />
    </div>
  )
}

export const SectionTitle = ({ children }) => {
  const backgroundColorHeight = '16px'
  const secondBackgroundHeight = '3px'
  return (
    <div className={'mb-2 flex flex-col items-start'}>
      <h1 className={'mb-0 text-left uppercase'}>
        {children}
        <div
          style={{
            width: '140%',
            position: 'relative',
            top: `-15px`,
            visibility: 'visible',
            borderColor:
              'transparent transparent rgba(0,120,0, 0.3) transparent',
            borderWidth: `0 ${backgroundColorHeight} ${backgroundColorHeight} 0`,
            borderStyle: 'solid',
          }}
        />
        <div
          style={{
            width: '140%',
            position: 'relative',
            top: `-12px`,
            visibility: 'visible',
            borderColor:
              'transparent transparent rgba(0,120,0, 0.3) transparent',
            borderWidth: `0 ${secondBackgroundHeight} ${secondBackgroundHeight} 0`,
            borderStyle: 'solid',
          }}
        />
      </h1>
    </div>
  )
}

export const SubTitle = ({ children }) => {
  return <h2 className={`mb-4 text-center underline`}>{children}</h2>
}
