import React, { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [siteName, setSiteName] = useState('')

  useEffect(() => {
    // Fetch the custom name from the external text file
    fetch('/name.txt')
      .then(res => res.text())
      .then(text => {
        const trimmedName = text.trim();
        setSiteName(trimmedName);
        document.title = trimmedName || 'Loading...';
      })
      .catch(() => {
        document.title = 'Untitled';
      });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('in-view');
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="scroll-wrapper">
      {/* Hero Section - Abstract */}
      <section className="section">
        <div className="abstract-hero animate-on-scroll">
          <div className="orb"></div>
          <div className="bar"></div>
        </div>
      </section>

      {/* Content Sections - Abstract Placeholders */}
      {[1, 2, 3].map((sectionId) => (
        <section key={sectionId} className="section">
          <div className="ghost-grid">
            {[1, 2, 3, 4].map((cardId) => (
              <div key={cardId} className="ghost-card animate-on-scroll">
                <div className="ghost-icon"></div>
                <div className="ghost-line long"></div>
                <div className="ghost-line"></div>
                <div className="ghost-line short"></div>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* Floating Elements */}
      <div className="ambient-particles">
        <div className="particle p1"></div>
        <div className="particle p2"></div>
        <div className="particle p3"></div>
      </div>
    </div>
  )
}

export default App
