import { mockAppData } from '../data/mockData'
import Card from './Card'
import SectionTitle from './SectionTitle'
import { volume } from '../utils'

export default function Workouts() {
  return (
    <>
      <SectionTitle eyebrow="Napló" title="Edzések" action={<button className="primary-button">+ Új edzés</button>} />
      {mockAppData.activeWorkout && <Card className="active-card"><div><span className="eyebrow">Folyamatban</span><h3>Aktív edzés</h3><p>{mockAppData.activeWorkout.exercises[0].exerciseNameSnapshot} · 1 / 2 szett kész</p></div><button className="primary-button">Folytatás →</button></Card>}
      <Card>
        <SectionTitle title="Előzmények" />
        <div className="history-list">{mockAppData.workouts.map((workout) => 
            <div className="history-row" key={workout.id}>
                <div className="date-box">{new Date(workout.startedAt).getDate()}
                    <small>{new Intl.DateTimeFormat('hu-HU', { month: 'short' }).format(new Date(workout.startedAt))}</small>
                </div>
                <div>
                    <strong>{workout.exercises.map((item) => item.exerciseNameSnapshot).join(' · ')}</strong>
                    <small>{workout.exercises.reduce((count, item) => count + item.sets.length, 0)} szett · {volume(workout).toLocaleString('hu-HU')} kg</small>
                </div>
                <button className="text-button">Részletek →</button>
            </div>)}
        </div>
      </Card>
    </>
  )
}