// MapLibre GL configuration and style setup
export const MAPLIBRE_STYLE_URL =
  import.meta.env.VITE_MAPLIBRE_STYLE_URL ?? 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json'

export const DEFAULT_CENTER: [number, number] = [
  Number(import.meta.env.VITE_MAP_CENTER_LNG ?? 108.252),
  Number(import.meta.env.VITE_MAP_CENTER_LAT ?? 15.975),
]

export const DEFAULT_ZOOM = 17
