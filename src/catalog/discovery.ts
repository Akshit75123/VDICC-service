import type { DiscoveredService } from '../types.js'

/**
 * Service catalog stub.
 * Later: Kubernetes / Compose / OpenTelemetry adapters populate this list.
 * The frontend currently keeps its own mock zones until those APIs are defined.
 */
const catalog: DiscoveredService[] = []

export function listServices(): DiscoveredService[] {
  return catalog
}

export async function refreshCatalog(): Promise<DiscoveredService[]> {
  // TODO: call discovery adapters (K8s watch, Prometheus targets, OTel resource attributes)
  return catalog
}
