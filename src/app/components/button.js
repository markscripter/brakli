import { styleParser } from '../../utilities/style-parser'

export const Button = ({
  styles = [],
  children
}) => {
  const STYLES = [
    'background-color: blue',
    'color: white',
    ...styles
  ]

  return `
  <button style='${styleParser(STYLES)}'>
    ${children}
  </button>`
}
