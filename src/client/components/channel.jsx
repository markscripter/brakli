import React from 'react'

export const Channel = ({
  text = '',
  children
}) => {

  return (
    <div style={{'margin': '50px 0'}}>
      <p>{text}</p>
      {children}
    </div>
  )
}
