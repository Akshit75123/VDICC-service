import { createServer } from 'node:http'
import { createApp } from './app.js'
import { config } from './config.js'
import { attachSocket } from './realtime/socket.js'

const app = createApp()
const httpServer = createServer(app)

attachSocket(httpServer)

httpServer.listen(config.port, '0.0.0.0', () => {
  console.log(`icc-backend listening on http://127.0.0.1:${config.port}`)
})
