const http = require('http')
const url = require('url')
const path = require('path')
const webSocket = require('ws')

const WebSocketService = (server) => {
  const wss = new webSocket.Server({ server })

  wss.connections = []

  wss.broadcast = message => 
    wss.connections.forEach(socket =>
      socket.send(message)
    )

  wss.closeSocket = socket => {
    return wss.connections.filter(s => s !== socket)
  }

  wss.on('connection', (socket, req) => {
    console.log('connection started')

    wss.connections.push(socket)

    socket.on('close', () => {})
    socket.on('message', msg => wss.broadcast(msg))
  });
}

module.exports = WebSocketService