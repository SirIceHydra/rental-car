import React from 'react'
import './EVOverlayCard.css'

const EVOverlayCard: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="ev-overlay-card">
      <div className="ev-overlay-background">
        <img 
          src="/22bbe872cdb6fc0939ae718ddcb10c8e2e57dc48.png" 
          alt="Luxury Car Background"
          className="ev-overlay-bg-img"
        />
        <div className="ev-overlay-overlay"></div>
      </div>
      
      <div className="ev-overlay-content">
        <div className="ev-overlay-text">
          <h3 className="ev-overlay-title">VIP Chauffeur Service</h3>
          <p className="ev-overlay-description">
            From airport transfers to winelands tours, our luxury VW Kombi chauffeur service elevates every journey across Cape Town.
          </p>
        </div>
        
        <button 
          className="ev-overlay-button"
          onClick={() => scrollToSection('contact')}
        >
          <span>Book Experience</span>
        </button>
      </div>
    </div>
  )
}

export default EVOverlayCard
