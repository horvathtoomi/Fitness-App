import { useState } from "react";
import type { Settings as SettingsModel } from "../model";

export default function Settings() {

  const [settings, setSettings] = useState<SettingsModel>({
    weightUnit: 'kg',
    defaultRestSeconds: 60,
    soundEnabled: true,
    autoStartRestTimer: true
  })

  function toggleSound() {
    setSettings((current) => ({
        ...current,
        soundEnabled: !current.soundEnabled,
    }))
  }

  function toggleWeightUnit() {
    setSettings((current) => ({
        ...current,
        weightUnit: current.weightUnit === 'kg' ? 'lb' : 'kg',
    }))
  }

  function toggleAutoStartRestTimer() {
    setSettings((current) => ({
        ...current,
        autoStartRestTimer: !current.autoStartRestTimer,
    }))
  }

  function updateDefaultRestSeconds(seconds: number) {
    setSettings((current) => ({
        ...current,
        defaultRestSeconds: seconds,
    }))
  }

  return (
    <div className="Settings">
        <h1>Settings</h1>
        <button onClick={toggleSound}>
            Hang: {settings.soundEnabled ? 'Be' : 'Ki'}
        </button>
        <button onClick={toggleWeightUnit}>
            Weight Unit: {settings.weightUnit === 'kg' ? 'Kilograms' : 'Pounds'}
        </button>
        <button onClick={toggleAutoStartRestTimer}>
            Auto Start Rest Timer: {settings.autoStartRestTimer ? 'On' : 'Off'}
        </button>
        <button onClick={() => updateDefaultRestSeconds(settings.defaultRestSeconds + 5)}>
            Increase Default Rest Seconds: {settings.defaultRestSeconds}
        </button>
        <button onClick={() => updateDefaultRestSeconds(settings.defaultRestSeconds - 5)}>
            Decrease Default Rest Seconds: {settings.defaultRestSeconds}
        </button>
    </div>
  );
}