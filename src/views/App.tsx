import { useMemo, useState } from 'react'
import { mockAppData } from '../data/mockData'
import type { WorkoutTemplate } from '../model'
import Settings from './Settings'
import Dashboard from './Dashboard'
import Catalog from './Catalog'
import Workouts from './Workouts'
import Goals from './Goals'
import Card from './Card'
import SectionTitle from './SectionTitle'
import './App.css'

export type View = 'dashboard' | 'catalog' | 'workouts' | 'templates' | 'goals' | 'settings'

const viewLabels: Record<View, string> = {
  dashboard: 'Áttekintés',
  catalog: 'Gyakorlatok',
  workouts: 'Edzések',
  templates: 'Sablonok',
  goals: 'Célok',
  settings: 'Beállítások',
}

function Templates() {
  return (
    <>
      <SectionTitle eyebrow="Újrakezdés könnyedén" title="Edzéssablonok" action={<button className="primary-button">+ Új sablon</button>} />
      <div className="template-grid">{mockAppData.templates.map((template) => <TemplateCard template={template} key={template.id} />)}</div>
    </>
  )
}

function TemplateCard({ template }: { template: WorkoutTemplate }) {
  return <Card className="template-card"><div className="template-top"><div className="exercise-icon">▣</div><button className="more-button" aria-label={`${template.name} menüje`}>•••</button></div><h3>{template.name}</h3><p>{template.exercises.length} gyakorlat · {template.exercises.reduce((total, exercise) => total + exercise.plannedSets.length, 0)} tervezett szett</p><div className="template-exercises">{template.exercises.map((exercise) => <span key={exercise.exerciseId}>{exercise.exerciseNameSnapshot}</span>)}</div><button className="secondary-button full-width">Edzés indítása</button></Card>
}


export default function App() {

  const [activeView, setActiveView] = useState<View>('dashboard')

  const content = useMemo(() => {
    switch (activeView) {
      case 'catalog': return <Catalog />
      case 'workouts': return <Workouts />
      case 'templates': return <Templates />
      case 'goals': return <Goals />
      case 'settings': return <Settings />
      default: return <Dashboard onNavigate={setActiveView} />
    }
  }, [activeView])

  return (
    <div className="app-shell">
      <aside className="sidebar"><div className="brand"><span className="brand-mark">F</span><span>FITNESS<span className="brand-accent">/</span>LOG</span></div><nav aria-label="Fő navigáció">{Object.entries(viewLabels).map(([view, label]) => <button className={activeView === view ? 'nav-item active' : 'nav-item'} key={view} onClick={() => setActiveView(view as View)}><span className="nav-icon">{view === 'dashboard' ? '⌂' : view === 'catalog' ? '▦' : view === 'workouts' ? '↗' : view === 'templates' ? '▣' : view === 'goals' ? '◆' : '⚙'}</span>{label}</button>)}</nav><div className="sidebar-footer"><span className="avatar">T</span><div><strong>Tom</strong><small>Demo profil</small></div></div></aside>
      <main className="main-content"><header className="topbar"><button className="mobile-menu" aria-label="Menü megnyitása">☰</button><span className="current-page">{viewLabels[activeView]}</span><div className="topbar-actions"><button className="icon-button" aria-label="Értesítések">♢</button><span className="avatar">T</span></div></header><div className="page-content">{content}</div></main>
    </div>
  )
}
