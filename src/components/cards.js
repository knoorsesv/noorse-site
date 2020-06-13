import React from 'react'

export const Card = (props) => {
  return (
    <div
      {...props}
      className={`${props.className} border rounded-md border-opacity-50 shadow-sm divide-y border-gray p-4`}
    >
      {props.header && (
        <div className={'font-semibold text-center mb-2'}>{props.header}</div>
      )}
      <div className={'w-full pt-2'}>{props.children}</div>
    </div>
  )
}
