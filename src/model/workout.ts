import type { Set } from './set'

export type WorkoutStatus = 'in-progress' | 'completed' | 'abandoned'

export interface WorkoutExercise {
  exerciseId: string
  exerciseNameSnapshot: string
  sets: Set[]
  order: number
}

export interface Workout {
  id: string
  startedAt: string
  completedAt: string | null
  status: WorkoutStatus
  note?: string
  exercises: WorkoutExercise[]
  templateId?: string
}