import React from 'react'

export const Switch = ({
  text = '',
  styles = {},
  children
}) => {
  return (
    <div className='c-switch' style={styles}>
      <span>{text}</span>
      {children}
    </div>
  )
}
