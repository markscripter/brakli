import React from 'react'
import { Button } from './components/button.jsx'
import { Slider } from './components/slider.jsx'
import { Channel } from './components/channel.jsx'

export const App = ({state = {}}) => {
  const onClickHandler = e => {
    console.log(e)
  }

  const onChangeHandler = e => {
    console.log(e)
  }
  
  return (
    <main>
      {
        Object.keys(state).map(key => {
          const value = state[key]
          return (
            <Channel key={key} text={key}>
              <Button onClick={onClickHandler} text={value} />
              <Slider onChange={onChangeHandler} value={value} />
            </Channel>
          )
        })
      }
    </main>
  )
}