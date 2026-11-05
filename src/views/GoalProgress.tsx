import type { Goal } from '../model'

export default function GoalProgress({ goal }: { goal: Goal }) {
  const current = goal.type === 'workout-count' ? 2 : 7350
  const percentage = Math.min(100, Math.round((current / goal.targetValue) * 100))
  return (
    <div className="goal-item">
      <div className="goal-heading"><strong>{goal.name}</strong><span>{current.toLocaleString('hu-HU')} / {goal.targetValue.toLocaleString('hu-HU')}</span></div>
      <div className="progress-track"><div className="progress-value" style={{ width: `${percentage}%` }} /></div>
      <small>{percentage}% teljesítve</small>
    </div>
  )
}