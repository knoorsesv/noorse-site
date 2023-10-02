export const Title = ({ children }) => {
  return (
    <div className={'mb-4 flex flex-col items-center'}>
      {/* todo: this should not be an h1, but now it has implicit typography styling so just changing to h2 breaks the styling */}
      <h1 className={'mb-4 text-center'}>{children}</h1>
      <div className={'m-2 w-[60%] border-b-2 border-black text-center'} />
    </div>
  )
}

export const SubTitle = ({ children }) => {
  return <h2 className={`mb-4 text-center underline`}>{children}</h2>
}
