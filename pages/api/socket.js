import { Server } from 'Socket.IO'

const SocketHandler = (req, res) => {
  if (res.socket.server.io) {
    console.log('Socket is already running')
  } else {
    console.log('Socket is initializing')
    const io = new Server(res.socket.server)
    res.socket.server.io = io

    io.on('connection', socket => {
      socket.on('input-change', msg => {
        socket.broadcast.emit('update-input', msg)
      })

      socket.on('queue-change', msg => {
        socket.broadcast.emit('queue-input', msg)
      })

      // place source of truth here for queued players?
    })
  }
  res.end()
}

export default SocketHandler