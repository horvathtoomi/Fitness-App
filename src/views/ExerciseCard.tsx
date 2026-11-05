import type { Exercise } from '../model'
import Card from './Card'

export default function ExerciseCard({ exercise }: { exercise: Exercise }) {
  return <Card className="exercise-card">
    <div className="exercise-icon">▦</div>
    <div>
      <span className="tag">{exercise.source === 'custom' ? 'Saját' : 'Katalógus'}</span>
      <h3>{exercise.name}</h3>
      <p>{exercise.muscleGroups.join(' · ')}</p>
      <small>{exercise.equipment}</small>
    </div>
    <button className="more-button" aria-label={`${exercise.name} menüje`}>•••</button>
  </Card>
}