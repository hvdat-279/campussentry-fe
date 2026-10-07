/** Anonymous density/flow data — no personal identification */
export interface DensityReading {
  zoneId: string
  timestamp: string
  count: number          // estimated headcount
  densityLevel: 'low' | 'moderate' | 'high' | 'overcrowded'
}

export interface FlowDataPoint {
  zoneId: string
  timestamp: string
  inflow: number
  outflow: number
  net: number
}

export interface PeopleZoneSummary {
  zoneId: string
  zoneName: string
  currentCount: number
  densityLevel: DensityReading['densityLevel']
  trend: 'increasing' | 'stable' | 'decreasing'
}
