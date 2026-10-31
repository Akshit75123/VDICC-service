import type { LogLine } from '../types.js'

/**
 * Log tail stub.
 * Later: Loki / Kubernetes logs / Datadog filtered by serviceId.
 */
export function getRecentLogs(serviceId: string): LogLine[] {
  return []
}

export async function startTail(_serviceId: string): Promise<void> {
  // TODO: open a log stream for this service and push lines over Socket.io
}
