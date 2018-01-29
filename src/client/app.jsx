import React from 'react'
import { SliderChannel } from './components/slider-channel.jsx'

export const App = ({
  state = {},
  onStateChange = () => {}
}) => {
  //

  const onChangeHandler = (chan, value) => {
    const returnedState = {}
    Object.keys(state).map(k => {
      if (k !== chan) {
        returnedState[k] = state[k]
      } else {
        returnedState[k] = Object.assign({}, state[k], { index: value })
      }
    })
    onStateChange(returnedState)
    return returnedState
  }
  debugger
  return (
    <main>
      <h1>Brakli</h1>
      {
        Object.keys(state).map(key =>
          <SliderChannel key={key} onChange={onChangeHandler} text={key} channel={state[key]} />
        )
      }
    </main>
  )
}
