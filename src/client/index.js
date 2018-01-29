import React from 'react'
import { hydrate } from 'react-dom'
import { App } from './app.jsx'

const URL = 'ws://localhost:8880'

const socket = new WebSocket(URL)

// Connection opened
socket.addEventListener('open', e => {
  console.log(`Connected to ${URL}`)
  socket.send(`Connected to ${URL}`)
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
})

const renderApp = (state) => {
  hydrate(<App state={state} />, document.getElementById('app'))
}