import { Router } from 'express'
import { listServices, refreshCatalog } from '../catalog/discovery.js'

export const catalogRouter = Router()

catalogRouter.get('/', (_req, res) => {
  res.json({ services: listServices() })
})

catalogRouter.post('/refresh', async (_req, res) => {
  const services = await refreshCatalog()
  res.json({ services, refreshed: true })
})
