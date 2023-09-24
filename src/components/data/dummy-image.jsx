import React from 'react'

export const DummyImage = () => {
  const size = 100 + Math.round(Math.random() * 100)
  return (
    <img
      src={`https://placekitten.com/${size}/${size}`}
      alt="Some cat"
      className="w-full h-full"
    />
  )
}
