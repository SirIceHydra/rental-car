import React from 'react'
import './EVBrandCard.css'

const EVBrandCard: React.FC = () => {
  return (
    <div className="ev-brand-card">
      <div className="ev-brand-background">
        <img 
          src="/Vehicle-and-Chauffeur-Hire.jpg" 
          alt="Luxury Chauffeur and Vehicle"
          className="ev-brand-bg-img"
        />
        <div className="ev-brand-overlay"></div>
      </div>
      
      <div className="ev-brand-content">
        <div className="ev-brand-header">
          <div className="ev-brand-icon">
            <img 
              src="/logo.svg" 
              alt="EliteDrive Logo"
              className="ev-brand-icon-img"
            />
          </div>
          <span className="ev-brand-name">EliteDrive</span>
        </div>
        
        <div className="ev-brand-title">
          <h2>Luxury</h2>
          <h2>Chauffeur</h2>
        </div>
      </div>
    </div>
  )
}

export default EVBrandCard
