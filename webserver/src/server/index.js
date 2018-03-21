const express = require('express')
const http = require('http')
const WebSocketService = require('./services/web-socket')
const ControllerService = require('./services/controller')

const app = express()
const server = http.createServer(app)

app.use(express.static('public'))

ControllerService(app)
WebSocketService(server)

server.listen(8880, _ => console.log(`Server on port 8880`))
