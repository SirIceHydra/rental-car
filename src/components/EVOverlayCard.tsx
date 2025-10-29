import React from 'react'
import './EVOverlayCard.css'

const EVOverlayCard: React.FC = () => {
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
          <h3 className="ev-overlay-title">Luxury for Every Occasion</h3>
          <p className="ev-overlay-description">
            From executive transport to special celebrations, we provide the perfect luxury vehicle for every moment that matters.
          </p>
        </div>
        
        <button className="ev-overlay-button">
          <span>Our Story</span>
        </button>
      </div>
    </div>
  )
}

export default EVOverlayCard
