import type { Server as HttpServer } from 'node:http'
import { Server } from 'socket.io'
import { config } from '../config.js'

/**
 * Socket.io stub.
 * Later: emit map:services, zone:status, alert:new, logs:<serviceId>.
 * The UI is not connected to this gateway yet.
 */
export function attachSocket(httpServer: HttpServer) {
  const io = new Server(httpServer, {
    cors: {
      origin: config.corsOrigin,
    },
  })

  io.on('connection', (socket) => {
    socket.emit('ready', { ok: true, mode: 'stub' })
  })

  return io
}
