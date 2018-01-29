import React from 'react'

export const Channel = ({
  text = '',
  children
}) => {

  return (
    <div style={{'margin': '0 0 50px'}}>
      <h2>{text}</h2>
      {children}
    </div>
  )
}
