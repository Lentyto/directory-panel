import { useState } from 'react'
import './App.css'

function App() {
  const [toast, setToast] = useState({ show: false, message: '' })

  const simulateOpen = (folderName) => {
    setToast({ show: true, message: `Accessing folder: ${folderName}...` })
    setTimeout(() => setToast({ show: false, message: '' }), 2000)
  }

  const handleMainAction = () => {
    setToast({ show: true, message: "Folder creation requested." })
    setTimeout(() => setToast({ show: false, message: '' }), 2000)
  }

  const items = [
    { name: 'Documents', icon: '📁', description: 'Private & Shared Files', badge: '12 Items' },
    { name: 'Media', icon: '🎞️', description: 'Photos & Videos', badge: '45 Items' },
    { name: 'Projects', icon: '🚀', description: 'Active Workflows', badge: '8 Items' },
    { name: 'Backups', icon: '☁️', description: 'System Snapshots', badge: 'Verified', status: 'ok' },
  ]

  return (
    <div className="app-root">
      <div className="glass-container">
        <header>
          <h1>Directory Panel</h1>
          <p className="subtitle">Secure Storage & File Management (React Edition)</p>
        </header>

        <main className="panel-grid">
          {items.map((item) => (
            <div key={item.name} className="panel-card" onClick={() => simulateOpen(item.name)}>
              <div className="icon">{item.icon}</div>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <div className={`badge ${item.status === 'ok' ? 'status-ok' : ''}`}>
                {item.badge}
              </div>
            </div>
          ))}
        </main>

        <footer>
          <button className="btn-primary" onClick={handleMainAction}>
            Upload New Folder
          </button>
        </footer>
      </div>

      <div className={`toast ${toast.show ? 'show' : ''}`}>
        {toast.message}
      </div>
    </div>
  )
}

export default App
