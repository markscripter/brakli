import React, { Component } from 'react'
import { Channel } from './channel.jsx'

const BASE_STYLES = {
  backgroundColor: 'blue',
  color: 'white'
}

export class SliderChannel extends Component {
  constructor (props) {
    super(props)

    this.state = {
      value: props.value || ''
    }

    this.onChangeHandler = this.onChangeHandler.bind(this)
  }

  render () {
    const {
      styles = {},
      text = ''
    } = this.props

    const { value } = this.state

    const STYLES = Object.assign({}, BASE_STYLES, styles)

    return (
      <Channel text={text}>
        <input type='range' style={STYLES} min='0' max='10' value={value} onChange={this.onChangeHandler} />
      </Channel>
    )
  }

  onChangeHandler (e) {
    this.setState({ value: e.target.value })
    this.props.onChange(this.props.text, e.target.value)
  }
}
