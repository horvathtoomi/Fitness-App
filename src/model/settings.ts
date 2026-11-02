
export type WeightUnit = 'kg' | 'lb'

export interface Settings {
  weightUnit: WeightUnit
  defaultRestSeconds: number
  soundEnabled: boolean
  autoStartRestTimer: boolean
}