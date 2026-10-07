export interface SensorReading {
  sensorId: string
  zoneId: string
  timestamp: string // ISO 8601
  temperature?: number  // Celsius
  humidity?: number     // %
  co2?: number          // ppm
  pm25?: number         // µg/m³
  noiseDb?: number      // dB
}

export type AqiLevel = 'good' | 'moderate' | 'unhealthy_sensitive' | 'unhealthy' | 'hazardous'

export interface EnvironmentSummary {
  zoneId: string
  zoneName: string
  latestReading: SensorReading
  aqiLevel: AqiLevel
  alertCount: number
}
