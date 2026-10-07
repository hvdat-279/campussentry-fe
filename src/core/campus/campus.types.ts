/** Represents a geographic zone within the campus (e.g. Building A, Parking Lot 1) */
export interface CampusZone {
  id: string
  name: string
  type: 'building' | 'parking' | 'outdoor' | 'corridor'
  floorCount?: number
  coordinates: [number, number] // [lng, lat]
  polygon?: [number, number][] // boundary
}

export interface Building {
  id: string
  name: string
  zones: CampusZone[]
}
