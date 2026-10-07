export type Coordinates = [number, number] // [lng, lat]

export interface GeoPoint {
  type: 'Point'
  coordinates: Coordinates
}

export interface GeoPolygon {
  type: 'Polygon'
  coordinates: Coordinates[][]
}

export type MapLayer =
  | 'people'
  | 'vehicles'
  | 'environment'
  | 'facilities'
  | 'alerts'

export interface LayerVisibility {
  layer: MapLayer
  visible: boolean
  opacity: number // 0-1
}
