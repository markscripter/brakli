import React from 'react'
import { SliderSwitch } from './components/slider-switch.jsx'

export const App = ({
  state = {},
  onStateChange = () => {}
}) => {
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

  const STYLES = {
    'display': 'grid',
    'gridTemplateRows': `repeat(${Object.keys(state).length}, 1fr)`,
    'height': '100vh'
  }

  return (
    <main style={STYLES}>
      {
        Object.keys(state).map((key, idx) =>
          <SliderSwitch
            key={key}
            text={key}
            onChange={onChangeHandler}
            channel={state[key]}
            styles={{
              'gridRow': `${idx + 1}`
            }}
          />
        )
      }
    </main>
  )
}
