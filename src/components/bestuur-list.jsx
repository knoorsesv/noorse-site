import React from 'react'
import { EmailLink } from './text.jsx'

export const BestuurList = ({ leden }) => {
  return (
    <ul className="list-none flex flex-col gap-8 my-10">
      {leden.map((lid) => {
        return (
          <li key={lid.title}>
            <div className="text-lg">
              <div className="font-semibold underline mb-2">{lid.title}</div>
              <span className="ml-4">{lid.naam && `${lid.naam}`}</span>
            </div>
            <span className="ml-4">
              <EmailLink address={lid.email}></EmailLink>
            </span>
          </li>
        )
      })}
    </ul>
  )
}
