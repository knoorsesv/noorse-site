import type { FC } from 'react'

export const Version: FC<{ version: string }> = ({ version }) => {
  return (
    <span>
      v{version} © {new Date().getFullYear()}, K. Noorse S.V.
    </span>
  )
}
