import React from 'react'

export const FakeLink = ({ children, to, className, activeClassName }) => {
  return (
    <a
      to={to}
      className={`${className} ${
        children === 'activeLink' && `${activeClassName}`
      }`}
    >
      {children}
    </a>
  )
}
