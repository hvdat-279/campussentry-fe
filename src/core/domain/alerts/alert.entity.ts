export type AlertLevel = 'info' | 'warning' | 'critical'
export type AlertSource = 'people' | 'vehicles' | 'environment' | 'facilities'
export type AlertEngine = 'v0_rule' | 'v1_anomaly'
export type AlertStatus = 'open' | 'acknowledged' | 'resolved'

export interface Alert {
  id: string
  level: AlertLevel
  source: AlertSource
  engine: AlertEngine
  title: string
  description: string
  zoneId: string
  status: AlertStatus
  detectedAt: string // ISO 8601
  acknowledgedAt?: string
  resolvedAt?: string
  metadata?: Record<string, unknown>
}

export interface AlertRule {
  id: string
  name: string
  source: AlertSource
  engine: AlertEngine
  condition: string // human-readable rule description
  threshold?: number
  enabled: boolean
}
