const http = require('http')
const url = require('url')
const path = require('path')
const WebSocket = require('ws')

const WebSocketService = (server) => {
  const wss = new WebSocket.Server({ server })

  wss.broadcast = message => 
    wss.clients.forEach(socket => {
      if (socket.readyState === WebSocket.OPEN) {
        socket.send(message)
      }
    })

  wss.on('connection', (socket, req) => {
    console.log('connection started')
    socket.isAlive = true
    
    socket.on('error', socket => {
      console.log('error:', socket)
    });
    
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

  const interval = setInterval(() => {
    wss.clients.forEach(socket => {
      if (socket.isAlive === false) socket.terminate()

      socket.isAlive = false
      socket.ping(() => {})
    })
  }, 10000)
}

module.exports = WebSocketService