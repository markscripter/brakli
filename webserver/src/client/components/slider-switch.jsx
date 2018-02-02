import React, { Component } from 'react'
import { Switch } from './switch.jsx'
import { CurrentFeed } from './current-feed.jsx'

const BASE_STYLES = {
  backgroundColor: 'blue',
  color: 'white'
}

export class SliderSwitch extends Component {
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
      text = '',
      channel
    } = this.props

    return (
      <Switch text={text} styles={styles}>
        <input type='range' list='tickmarks' style={BASE_STYLES} min='0' max={channel.total} value={channel.index} onChange={this.onChangeHandler} />
        <CurrentFeed text={text} {...channel.resources} />
      </Switch>
    )
  }

  onChangeHandler (e) {
    this.setState({ value: e.target.value })
    this.props.onChange(this.props.text, Number(e.target.value))
  }
}
