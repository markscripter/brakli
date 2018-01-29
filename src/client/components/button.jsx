import React from 'react'

const BASE_STYLES = {
  backgroundColor: 'blue',
  color: 'white'
}

export const Button = ({
  styles = {},
  onClick = () => {},
  text = ''
}) => {
  
  const STYLES = Object.assign({}, BASE_STYLES, styles)

  return <button style={STYLES} onClick={onClick}>{text}</button>
}
