import { mockAppData } from '../data/mockData'
import Card from './Card'
import GoalProgress from './GoalProgress'
import SectionTitle from './SectionTitle'

export default function Goals() {
  return (
    <>
      <SectionTitle eyebrow="Következetesség" title="Célok" action={<button className="primary-button">+ Új cél</button>} />
      <div className="goal-grid">{mockAppData.goals.map((goal) => 
        <Card className="large-goal" key={goal.id}>
          <span className="goal-symbol">{goal.type === 'volume' ? '↗' : '◆'}</span>
          <h3>{goal.name}</h3>
          <p>Heti cél</p>
          <strong>{goal.targetValue.toLocaleString('hu-HU')} {goal.type === 'volume' ? 'kg' : 'edzés'}</strong>
          <GoalProgress goal={goal} />
          <button className="text-button">Szerkesztés</button>
        </Card>)}
      </div>
    </>
  )
}