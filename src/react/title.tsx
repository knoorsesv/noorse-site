import type { ElementType, FC, PropsWithChildren } from 'react'

export const Title: FC<
  PropsWithChildren<{ as?: string; className?: string }>
> = ({ children, as = 'h1', className }) => {
  const Tag = as as ElementType
  return (
    <div className={'mb-4 flex flex-col items-center'}>
      <Tag className={className}>{children}</Tag>
      <div className={'m-2 w-[60%] border-b-2 border-black text-center'} />
    </div>
  )
}
