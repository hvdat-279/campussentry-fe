import type { AlertSource } from '@/core/domain/alerts/alert.entity'

export type RealtimeEventType =
  | 'density_update'
  | 'vehicle_update'
  | 'sensor_update'
  | 'incident_update'
  | 'alert_fired'
  | 'alert_resolved'

export interface RealtimeEvent<T = unknown> {
  type: RealtimeEventType
  source: AlertSource
  zoneId: string
  timestamp: string
  payload: T
}
