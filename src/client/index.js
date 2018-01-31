import React from 'react'
import { hydrate } from 'react-dom'
import { App } from './app.jsx'

const URL = 'ws://192.168.5.114:8880'
const socket = new WebSocket(URL)

// Connection opened
socket.addEventListener('open', e => {
  console.log(`Connected to ${URL}`)
  renderApp(window.INITIAL_STATE || {})
})

// Connection closed
socket.addEventListener('close', e => {
  console.log(`Disconnected from ${URL}`)
})

// Connection error
socket.addEventListener('error', e => {
  console.log(`Error from ${URL}`)
})

// Listen for messages
socket.addEventListener('message', e => {
  console.log('Message from server ', e.data)
  renderApp(JSON.parse(e.data))
})

const handleStateChange = updatedState =>
  socket.send(JSON.stringify(updatedState))

// render app with new state
const renderApp = state =>
  hydrate(<App state={state} onStateChange={handleStateChange} />, document.getElementById('app'))
