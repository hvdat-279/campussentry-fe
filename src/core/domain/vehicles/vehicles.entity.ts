export type VehicleType = 'motorbike' | 'car' | 'bicycle' | 'other'
export type ParkingSlotStatus = 'available' | 'occupied'

export interface ParkingSlot {
  id: string
  zoneId: string
  label: string
  status: ParkingSlotStatus
  vehicleType?: VehicleType
  occupiedSince?: string
}

export interface ParkingZoneSummary {
  zoneId: string
  zoneName: string
  totalSlots: number
  occupiedSlots: number
  availableSlots: number
  occupancyRate: number // 0-1
}

export interface VehicleFlowPoint {
  zoneId: string
  timestamp: string
  vehicleType: VehicleType
  inflow: number
  outflow: number
}
