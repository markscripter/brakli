import React from 'react'

export const Switch = ({
  text = '',
  styles = {},
  children
}) => {
  return (
    <div className='c-switch' style={styles}>
      <h2>{text}</h2>
      <section>
        {children}
      </section>
    </div>
  )
}
