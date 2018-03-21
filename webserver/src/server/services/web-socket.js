const WebSocket = require('ws')
const initialState = require('../state.json')

let state = initialState

const WebSocketService = (server) => {
  const wss = new WebSocket.Server({ server })

  wss.broadcast = message => {
    state = JSON.parse(message)
    wss.clients.forEach(socket => {
      if (socket.readyState === WebSocket.OPEN) {
        socket.send(message)
      }
    })
  }

  wss.on('connection', (socket, req) => {
    console.log('connection started')
    socket.isAlive = true
    socket.send(JSON.stringify(state))
    socket.on('error', socket => {
      // an error happened, log it but don't worry?

      console.log('error:', socket)
    })

    socket.on('pong', () => {
      console.log('socket alive')
      socket.isAlive = true
    })

    socket.on('close', socket => {
      console.log('disconnected:', socket)
    })

    socket.on('message', objectAsString => {
      console.log('message recieved:', objectAsString)
      wss.broadcast(objectAsString)
    })
  })

  setInterval(() => {
    wss.clients.forEach(socket => {
      if (socket.isAlive === false) socket.terminate()

      socket.isAlive = false
      socket.ping(() => {})
    })
  }, 10000)
}

module.exports = WebSocketService
