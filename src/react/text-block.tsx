import type { FC, PropsWithChildren } from 'react'

export const TextBlock: FC<PropsWithChildren> = ({ children }) => {
  // todo: not needed probably if everything is used with tailwind prose classes, only used on not found page
  return (
    <div className={'medium:mb-8 medium:px-6 mt-2 mb-4 font-light'}>
      {children}
    </div>
  )
}
