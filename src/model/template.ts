
export interface PlannedSet {
  repetitions: number
  weight?: number
}

export interface TemplateExercise {
  exerciseId: string
  exerciseNameSnapshot: string
  plannedSets: PlannedSet[]
  order: number
}

export interface WorkoutTemplate {
  id: string
  name: string
  exercises: TemplateExercise[]
  note?: string
}