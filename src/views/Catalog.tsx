import { useState } from 'react'
import { mockAppData } from '../data/mockData'
import Card from './Card'
import SectionTitle from './SectionTitle'
import ExerciseCard from './ExerciseCard'

export default function Catalog() {
  const [query, setQuery] = useState('')
  const filteredExercises = mockAppData.exercises.filter((exercise) => exercise.name.toLowerCase().includes(query.toLowerCase()))
  return (
    <>
      <SectionTitle eyebrow="Katalógus" title="Gyakorlatok" action={<button className="primary-button">+ Saját gyakorlat</button>} />
      <Card className="toolbar"><input aria-label="Gyakorlat keresése" placeholder="Keresés név alapján..." value={query} onChange={(event) => setQuery(event.target.value)} /><button className="secondary-button">Szűrők</button></Card>
      <div className="exercise-grid">
        {filteredExercises.map((exercise) => <ExerciseCard exercise={exercise} key={exercise.id} />)}
      </div>
    </>
  )
}