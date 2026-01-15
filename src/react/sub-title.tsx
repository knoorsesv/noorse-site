import type { FC, PropsWithChildren } from 'react'

export const SubTitle: FC<PropsWithChildren> = ({ children }) => {
  return <h3 className={`underline`}>{children}</h3>
}
