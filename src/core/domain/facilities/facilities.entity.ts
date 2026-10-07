export type RoomStatus = 'available' | 'in_use' | 'maintenance' | 'closed'
export type EquipmentStatus = 'operational' | 'degraded' | 'failed' | 'offline'
export type IncidentSeverity = 'low' | 'medium' | 'high'

export interface Room {
  id: string
  name: string
  building: string
  floor: number
  capacity: number
  status: RoomStatus
  equipmentIds: string[]
}

export interface Equipment {
  id: string
  name: string
  type: string
  roomId: string
  status: EquipmentStatus
  lastMaintainedAt?: string
}

export interface Incident {
  id: string
  title: string
  description: string
  roomId?: string
  equipmentId?: string
  severity: IncidentSeverity
  reportedAt: string
  resolvedAt?: string
  reportedBy: string
}
