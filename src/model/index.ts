import type { Exercise } from './excersice'
import type { Goal } from './goal'
import type { Settings } from './settings'
import type { WorkoutTemplate } from './template'
import type { Workout } from './workout'

export type {
  Exercise,
  ExerciseSource,
} from './excersice'

export type {
  Set,
} from './set'

export type {
  Workout,
  WorkoutExercise,
  WorkoutStatus,
} from './workout'

export type {
  PlannedSet,
  TemplateExercise,
  WorkoutTemplate,
} from './template'

export type {
  Goal,
  GoalPeriod,
  GoalType,
} from './goal'

export type {
  Settings,
  WeightUnit,
} from './settings'

export interface AppData {
  schemaVersion: number
  exercises: Exercise[]
  workouts: Workout[]
  templates: WorkoutTemplate[]
  goals: Goal[]
  settings: Settings
  activeWorkout: Workout | null
}