import { mockAppData } from '../data/mockData'
import { formatDate, volume } from '../utils'
import type { View } from './App'
import Card from './Card'
import SectionTitle from './SectionTitle'
import GoalProgress from './GoalProgress'

export default function Dashboard({ onNavigate }: { onNavigate: (view: View) => void }) {
  const latestWorkouts = mockAppData.workouts.slice(0, 3)
  const totalVolume = mockAppData.workouts.reduce((total, workout) => total + volume(workout), 0)

  return (
    <>
      <div className="hero">
        <div>
          <span className="eyebrow">Jó edzést!</span>
          <h1>Építsd fel az erődet.</h1>
          <p>Kövesd a haladásod, és maradj következetes minden héten.</p>
        </div>
        <button className="primary-button" onClick={() => onNavigate('workouts')}>
          + Új edzés
        </button>
      </div>

      <div className="stats-grid">
        <Card><span className="stat-label">Edzések</span><strong>{mockAppData.workouts.length}</strong><small>Összesen</small></Card>
        <Card><span className="stat-label">Összvolumen</span><strong>{totalVolume.toLocaleString('hu-HU')} kg</strong><small>Mock adatok alapján</small></Card>
        <Card><span className="stat-label">Aktív célok</span><strong>{mockAppData.goals.length}</strong><small>Ezen a héten</small></Card>
      </div>

      <div className="dashboard-grid">
        <Card>
          <SectionTitle title="Legutóbbi edzések" action={<button className="text-button" onClick={() => onNavigate('workouts')}>Mind →</button>} />
          <div className="stack-list">
            {latestWorkouts.map((workout) => (
              <div className="list-row" key={workout.id}>
                <div className="icon-box">↗</div>
                <div><strong>{workout.exercises.map((item) => item.exerciseNameSnapshot).join(' · ')}</strong><small>{formatDate(workout.startedAt)}</small></div>
                <span className="row-value">{volume(workout).toLocaleString('hu-HU')} kg</span>
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <SectionTitle title="Célok" action={<button className="text-button" onClick={() => onNavigate('goals')}>Mind →</button>} />
          <div className="stack-list">
            {mockAppData.goals.map((goal) => <GoalProgress goal={goal} key={goal.id} />)}
          </div>
        </Card>
      </div>
    </>
  )
}