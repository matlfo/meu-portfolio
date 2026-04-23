import express from 'express'
import { createServer } from 'http'
import { Server } from 'socket.io'
import cors from 'cors'

const app = express()
const server = createServer(app)
const io = new Server(server, {
  cors: {
    origin: ['http://localhost:3000', 'http://localhost:3001', 'https://matlfo.github.io'],
    methods: ['GET', 'POST']
  }
})

app.use(cors())

let visitorCount = 0
let activeVisitors = 0

io.on('connection', (socket) => {
  visitorCount++
  activeVisitors++

  console.log(`Visitante conectado: ${socket.id} | Total ativos: ${activeVisitors} | Visitas totais: ${visitorCount}`)

  // Envia dados atuais para o cliente
  socket.emit('visitor-data', {
    activeVisitors,
    totalVisits: visitorCount
  })

  // Notifica todos sobre mudança no contador
  io.emit('visitors-update', {
    activeVisitors,
    totalVisits: visitorCount
  })

  socket.on('disconnect', () => {
    activeVisitors--
    console.log(`Visitante desconectado: ${socket.id} | Total ativos: ${activeVisitors}`)

    io.emit('visitors-update', {
      activeVisitors,
      totalVisits: visitorCount
    })
  })
})

const PORT = process.env.PORT || 3002
server.listen(PORT, () => {
  console.log(`Servidor Socket.io rodando na porta ${PORT}`)
})
