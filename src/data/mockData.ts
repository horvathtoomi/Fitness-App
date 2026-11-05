import type { AppData, Exercise, Goal, Settings, Workout, WorkoutTemplate } from '../model'

const exercises: Exercise[] = [
  {
    id: 'exercise-squat',
    name: 'Barbell Squat',
    muscleGroups: ['Quadriceps', 'Glutes'],
    equipment: 'Barbell',
    source: 'api',
    externalId: 'wger-1',
  },
  {
    id: 'exercise-bench-press',
    name: 'Bench Press',
    muscleGroups: ['Chest', 'Triceps'],
    equipment: 'Barbell',
    source: 'api',
    externalId: 'wger-2',
  },
  {
    id: 'exercise-deadlift',
    name: 'Deadlift',
    muscleGroups: ['Back', 'Glutes', 'Hamstrings'],
    equipment: 'Barbell',
    source: 'api',
    externalId: 'wger-3',
  },
  {
    id: 'exercise-overhead-press',
    name: 'Overhead Press',
    muscleGroups: ['Shoulders', 'Triceps'],
    equipment: 'Dumbbell',
    source: 'api',
    externalId: 'wger-4',
  },
  {
    id: 'exercise-pull-up',
    name: 'Pull-up',
    muscleGroups: ['Back', 'Biceps'],
    equipment: 'Bodyweight',
    source: 'api',
    externalId: 'wger-5',
  },
  {
    id: 'exercise-lunge',
    name: 'Walking Lunge',
    muscleGroups: ['Quadriceps', 'Glutes'],
    equipment: 'Dumbbell',
    source: 'api',
    externalId: 'wger-6',
  },
  {
    id: 'exercise-cable-row',
    name: 'Seated Cable Row',
    muscleGroups: ['Back', 'Biceps'],
    equipment: 'Cable',
    source: 'custom',
    notes: 'Keep the chest tall throughout the movement.',
  },
  {
    id: 'exercise-plank',
    name: 'Plank',
    muscleGroups: ['Core'],
    equipment: 'Bodyweight',
    source: 'custom',
  },
]

const completedWorkouts: Workout[] = [
  {
    id: 'workout-2026-10-30',
    startedAt: '2026-10-30T16:30:00.000Z',
    completedAt: '2026-10-30T17:25:00.000Z',
    status: 'completed',
    exercises: [
      {
        exerciseId: 'exercise-squat',
        exerciseNameSnapshot: 'Barbell Squat',
        order: 0,
        sets: [
          { id: 'set-301', weight: 70, repetitions: 8, completed: true },
          { id: 'set-302', weight: 75, repetitions: 8, completed: true },
          { id: 'set-303', weight: 75, repetitions: 6, completed: true },
        ],
      },
      {
        exerciseId: 'exercise-lunge',
        exerciseNameSnapshot: 'Walking Lunge',
        order: 1,
        sets: [
          { id: 'set-304', weight: 16, repetitions: 10, completed: true },
          { id: 'set-305', weight: 16, repetitions: 10, completed: true },
        ],
      },
    ],
  },
  {
    id: 'workout-2026-10-28',
    startedAt: '2026-10-28T17:00:00.000Z',
    completedAt: '2026-10-28T17:48:00.000Z',
    status: 'completed',
    exercises: [
      {
        exerciseId: 'exercise-bench-press',
        exerciseNameSnapshot: 'Bench Press',
        order: 0,
        sets: [
          { id: 'set-201', weight: 55, repetitions: 10, completed: true },
          { id: 'set-202', weight: 60, repetitions: 8, completed: true },
          { id: 'set-203', weight: 60, repetitions: 7, completed: true },
        ],
      },
      {
        exerciseId: 'exercise-overhead-press',
        exerciseNameSnapshot: 'Overhead Press',
        order: 1,
        sets: [
          { id: 'set-204', weight: 18, repetitions: 10, completed: true },
          { id: 'set-205', weight: 18, repetitions: 9, completed: true },
        ],
      },
    ],
  },
  {
    id: 'workout-2026-10-25',
    startedAt: '2026-10-25T09:15:00.000Z',
    completedAt: '2026-10-25T10:12:00.000Z',
    status: 'completed',
    note: 'Focused on controlled tempo.',
    exercises: [
      {
        exerciseId: 'exercise-deadlift',
        exerciseNameSnapshot: 'Deadlift',
        order: 0,
        sets: [
          { id: 'set-101', weight: 90, repetitions: 5, completed: true },
          { id: 'set-102', weight: 95, repetitions: 5, completed: true },
          { id: 'set-103', weight: 100, repetitions: 3, completed: true },
        ],
      },
      {
        exerciseId: 'exercise-cable-row',
        exerciseNameSnapshot: 'Seated Cable Row',
        order: 1,
        sets: [
          { id: 'set-104', weight: 45, repetitions: 12, completed: true },
          { id: 'set-105', weight: 45, repetitions: 12, completed: true },
        ],
      },
    ],
  },
  {
    id: 'workout-2026-10-22',
    startedAt: '2026-10-22T18:10:00.000Z',
    completedAt: '2026-10-22T18:52:00.000Z',
    status: 'completed',
    exercises: [
      {
        exerciseId: 'exercise-pull-up',
        exerciseNameSnapshot: 'Pull-up',
        order: 0,
        sets: [
          { id: 'set-401', weight: 0, repetitions: 8, completed: true },
          { id: 'set-402', weight: 0, repetitions: 7, completed: true },
          { id: 'set-403', weight: 0, repetitions: 6, completed: true },
        ],
      },
      {
        exerciseId: 'exercise-plank',
        exerciseNameSnapshot: 'Plank',
        order: 1,
        sets: [
          { id: 'set-404', weight: 0, repetitions: 60, completed: true },
          { id: 'set-405', weight: 0, repetitions: 45, completed: true },
        ],
      },
    ],
  },
  {
    id: 'workout-2026-10-19',
    startedAt: '2026-10-19T07:30:00.000Z',
    completedAt: '2026-10-19T08:18:00.000Z',
    status: 'completed',
    exercises: [
      {
        exerciseId: 'exercise-squat',
        exerciseNameSnapshot: 'Barbell Squat',
        order: 0,
        sets: [
          { id: 'set-501', weight: 65, repetitions: 10, completed: true },
          { id: 'set-502', weight: 70, repetitions: 8, completed: true },
        ],
      },
      {
        exerciseId: 'exercise-bench-press',
        exerciseNameSnapshot: 'Bench Press',
        order: 1,
        sets: [
          { id: 'set-503', weight: 50, repetitions: 10, completed: true },
          { id: 'set-504', weight: 55, repetitions: 8, completed: true },
        ],
      },
    ],
  },
  {
    id: 'workout-2026-10-16',
    startedAt: '2026-10-16T16:45:00.000Z',
    completedAt: '2026-10-16T17:32:00.000Z',
    status: 'completed',
    exercises: [
      {
        exerciseId: 'exercise-overhead-press',
        exerciseNameSnapshot: 'Overhead Press',
        order: 0,
        sets: [
          { id: 'set-601', weight: 16, repetitions: 10, completed: true },
          { id: 'set-602', weight: 18, repetitions: 8, completed: true },
        ],
      },
      {
        exerciseId: 'exercise-pull-up',
        exerciseNameSnapshot: 'Pull-up',
        order: 1,
        sets: [
          { id: 'set-603', weight: 0, repetitions: 7, completed: true },
          { id: 'set-604', weight: 0, repetitions: 6, completed: true },
        ],
      },
    ],
  },
]

const templates: WorkoutTemplate[] = [
  {
    id: 'template-upper-body',
    name: 'Upper Body Strength',
    exercises: [
      {
        exerciseId: 'exercise-bench-press',
        exerciseNameSnapshot: 'Bench Press',
        order: 0,
        plannedSets: [
          { weight: 55, repetitions: 8 },
          { weight: 55, repetitions: 8 },
          { weight: 50, repetitions: 10 },
        ],
      },
      {
        exerciseId: 'exercise-cable-row',
        exerciseNameSnapshot: 'Seated Cable Row',
        order: 1,
        plannedSets: [
          { weight: 45, repetitions: 12 },
          { weight: 45, repetitions: 12 },
        ],
      },
      {
        exerciseId: 'exercise-overhead-press',
        exerciseNameSnapshot: 'Overhead Press',
        order: 2,
        plannedSets: [
          { weight: 16, repetitions: 10 },
          { weight: 16, repetitions: 10 },
        ],
      },
    ],
  },
  {
    id: 'template-lower-body',
    name: 'Lower Body Focus',
    exercises: [
      {
        exerciseId: 'exercise-squat',
        exerciseNameSnapshot: 'Barbell Squat',
        order: 0,
        plannedSets: [
          { weight: 70, repetitions: 8 },
          { weight: 70, repetitions: 8 },
          { weight: 65, repetitions: 10 },
        ],
      },
      {
        exerciseId: 'exercise-deadlift',
        exerciseNameSnapshot: 'Deadlift',
        order: 1,
        plannedSets: [
          { weight: 90, repetitions: 5 },
          { weight: 95, repetitions: 5 },
        ],
      },
      {
        exerciseId: 'exercise-lunge',
        exerciseNameSnapshot: 'Walking Lunge',
        order: 2,
        plannedSets: [
          { weight: 14, repetitions: 10 },
          { weight: 14, repetitions: 10 },
        ],
      },
    ],
  },
]

const goals: Goal[] = [
  {
    id: 'goal-weekly-workouts',
    name: 'Three workouts per week',
    type: 'workout-count',
    targetValue: 3,
    period: 'weekly',
  },
  {
    id: 'goal-weekly-volume',
    name: 'Weekly volume',
    type: 'volume',
    targetValue: 10000,
    period: 'weekly',
  },
]

const settings: Settings = {
  weightUnit: 'kg',
  defaultRestSeconds: 90,
  soundEnabled: true,
  autoStartRestTimer: true,
}

const activeWorkout: Workout = {
  id: 'workout-active-demo',
  startedAt: '2026-11-05T16:00:00.000Z',
  completedAt: null,
  status: 'in-progress',
  exercises: [
    {
      exerciseId: 'exercise-bench-press',
      exerciseNameSnapshot: 'Bench Press',
      order: 0,
      sets: [
        { id: 'set-active-1', weight: 50, repetitions: 10, completed: true },
        { id: 'set-active-2', weight: 55, repetitions: 8, completed: false },
      ],
    },
  ],
}

export const mockAppData: AppData = {
  schemaVersion: 1,
  exercises,
  workouts: completedWorkouts,
  templates,
  goals,
  settings,
  activeWorkout,
}
