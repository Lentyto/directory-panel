import React, { useEffect } from 'react'
import './App.css'

function App() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="scroll-wrapper">
      <section className="hero section">
        <div className="content animate-on-scroll">
          <h1>Directory Panel</h1>
          <p className="subtitle">The Future of Cloud Management</p>
          <div className="scroll-indicator">
            <div className="mouse"></div>
            <span>Scroll to explore</span>
          </div>
        </div>
      </section>

      <section className="features section">
        <div className="panel-grid">
          {[
            { id: 1, name: 'Secure Storage', icon: '🔒', text: 'Military-grade encryption for all your directory metadata.' },
            { id: 2, name: 'Global Sync', icon: '🌐', text: 'Instant propagation across continents with zero latency.' },
            { id: 3, name: 'AI Insights', icon: '🧠', text: 'Automatic classification and tagging of directory assets.' },
            { id: 4, name: 'Elastic Scaling', icon: '📈', text: 'Handles trillions of entries without breaking a sweat.' },
          ].map(item => (
            <div key={item.id} className="panel-card animate-on-scroll">
              <div className="icon">{item.icon}</div>
              <h3>{item.name}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="showcase section">
        <div className="glass-showcase animate-on-scroll">
          <div className="mockup-header">
            <div className="dots"><span></span><span></span><span></span></div>
          </div>
          <div className="mockup-body">
            <div className="mockup-row skeleton-title"></div>
            <div className="mockup-row"></div>
            <div className="mockup-row"></div>
            <div className="mockup-row short"></div>
          </div>
        </div>
      </section>

      <footer className="footer section">
        <p className="animate-on-scroll">© 2026 Directory Panel. A Premium Placeholder Experience.</p>
      </footer>
    </div>
  )
}

export default App
