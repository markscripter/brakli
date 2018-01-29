import React from 'react'

export const Channel = ({
  text = '',
  children
}) => {

  return (
    <div>
      <p>{text}</p>
      <hr />
      {children}
    </div>
  )
}
