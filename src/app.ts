import cors from 'cors'
import express from 'express'
import { config } from './config.js'
import { handleWebhook } from './ingest/webhooks.js'
import { catalogRouter } from './routes/catalog.js'
import { healthRouter } from './routes/health.js'
import { logsRouter } from './routes/logs.js'

export function createApp() {
  const app = express()

  app.use(cors({ origin: config.corsOrigin }))
  app.use(express.json({ limit: '1mb' }))

  app.use('/health', healthRouter)
  app.use('/catalog', catalogRouter)
  app.use('/logs', logsRouter)
  app.post('/webhooks/:source', handleWebhook)

  return app
}
