import React from 'react'

const BASE_STYLES = {
  backgroundColor: 'blue',
  color: 'white'
}

export const Slider = ({
  styles = {},
  onChange = () => {},
  value = ''
}) => {
  
  const STYLES = Object.assign({}, BASE_STYLES, styles)

  return <input type='range' style={STYLES} min='0' max='10' value={value} onChange={onChange} />
}
