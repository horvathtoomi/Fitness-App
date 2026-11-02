export type ExerciseSource = 'api' | 'custom'

export interface Exercise {
  id: string
  name: string
  muscleGroups: string[]
  equipment?: string
  source: ExerciseSource
  externalId?: string
  notes?: string
}