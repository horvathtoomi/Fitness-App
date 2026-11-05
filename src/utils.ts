import type { Workout } from './model'

export function formatDate(value: string) {
  return new Intl.DateTimeFormat('hu-HU', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(value))
}

export function volume(workout: Workout) {
  return workout.exercises.reduce((total, exercise) => total + exercise.sets.reduce((exerciseTotal, set) => exerciseTotal + set.weight * set.repetitions, 0), 0,)
}