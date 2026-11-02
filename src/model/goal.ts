
export type GoalType = 'workout-count' | 'volume'
export type GoalPeriod = 'weekly'

export interface Goal {
  id: string
  name: string
  type: GoalType
  targetValue: number
  period: GoalPeriod
  startDate?: string
  endDate?: string
}