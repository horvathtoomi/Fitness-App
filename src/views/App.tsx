import Settings from './Settings'
import { useState } from 'react'
import './App.css'

export default function App() {
  const [showSettings, setShowSettings] = useState(false)

  return (
    <main>
      <button onClick={() => setShowSettings(!showSettings)}>
        {showSettings ? 'Hide Settings' : 'Show Settings'}
      </button>
      {showSettings && <Settings />}
    </main>
  )
}