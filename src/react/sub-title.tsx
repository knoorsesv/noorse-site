import type { FC, PropsWithChildren } from 'react'

export const SubTitle: FC<PropsWithChildren> = ({ children }) => {
  return <h2 className={`mb-4 text-center underline`}>{children}</h2>
}
