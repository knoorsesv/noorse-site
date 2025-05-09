import type { FC } from 'react'
import { EmailLink } from './links'

export const BestuurList: FC<{
  leden: { title: string; naam?: string; email: string }[]
}> = ({ leden }) => {
  return (
    <ul className="my-10 flex list-none flex-col gap-8">
      {leden.map((lid) => {
        return (
          <li key={lid.title}>
            <div className="text-lg">
              <div className="mb-2 font-semibold underline">{lid.title}</div>
              <span className="ml-4">{lid.naam && `${lid.naam}`}</span>
            </div>
            <span className="ml-4">
              <EmailLink address={lid.email} />
            </span>
          </li>
        )
      })}
    </ul>
  )
}
