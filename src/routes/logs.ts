import { Router } from 'express'
import { getRecentLogs } from '../logs/tail.js'

export const logsRouter = Router()

logsRouter.get('/:serviceId', (req, res) => {
  res.json({
    serviceId: req.params.serviceId,
    lines: getRecentLogs(req.params.serviceId),
  })
})
