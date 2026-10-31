export type ServiceStatus = 'healthy' | 'degraded' | 'critical'

export type ServiceKind = 'frontend' | 'backend' | 'database' | 'queue' | 'cache' | 'cluster' | 'gateway'

export interface DiscoveredService {
  id: string
  name: string
  kind: ServiceKind
  status: ServiceStatus
  metrics: {
    p99: string
    errorRate: string
    rps: string
  }
}

export interface IngestedAlert {
  id: string
  source: string
  severity: 'info' | 'warning' | 'critical'
  title: string
  zoneId: string
  receivedAt: string
}

export interface LogLine {
  t: string
  level: 'INFO' | 'WARN' | 'ERROR'
  msg: string
  serviceId: string
}
