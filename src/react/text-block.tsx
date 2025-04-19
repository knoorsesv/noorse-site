import type { FC, PropsWithChildren } from 'react'

export const TextBlock: FC<PropsWithChildren> = ({ children }) => {
  // todo: not needed probably if everything is used with tailwind prose classes, only used on not found page
  return (
    <div className={'mb-4 mt-2 font-light medium:mb-8 medium:px-6'}>
      {children}
    </div>
  )
}
