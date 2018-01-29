import React from 'react'
import { Button } from './components/button.jsx'
import { Channel } from './components/channel.jsx'

export const App = () => {
  const onClickHandler = (e) => {
    console.log(e)
    debugger
  }
  return (
    <div>
      <Channel text='Volume'>
        <Button onClick={onClickHandler} text='1' styles={{ textDecoration: 'underline' }}/>
      </Channel>
    </div>
  )
}