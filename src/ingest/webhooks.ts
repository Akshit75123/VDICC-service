import type { Request, Response } from 'express'
import type { IngestedAlert } from '../types.js'

/**
 * Webhook ingestion stub.
 * Later: Grafana, Prometheus Alertmanager, Datadog, and PagerDuty POST here.
 * Payloads are acknowledged only; no mapping, Redis, or Socket.io fan-out yet.
 */
export function handleWebhook(req: Request, res: Response) {
  const source = String(req.params.source ?? 'unknown')
  const alert: IngestedAlert = {
    id: `stub-${Date.now()}`,
    source,
    severity: 'info',
    title: 'Webhook received (not processed)',
    zoneId: 'unmapped',
    receivedAt: new Date().toISOString(),
  }

  res.status(202).json({
    accepted: true,
    processed: false,
    alert,
  })
}
