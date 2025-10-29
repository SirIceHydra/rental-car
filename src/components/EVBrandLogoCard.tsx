import React from 'react'
import './EVBrandLogoCard.css'

const EVBrandLogoCard: React.FC = () => {
  return (
    <div className="ev-brand-logo-card">
      <div className="ev-brand-logo-icon">
        <img 
          src="/logo.svg" 
          alt="EliteDrive Logo"
          className="ev-brand-logo-icon-img"
        />
      </div>
      <div className="ev-brand-logo-text">
        <span className="ev-brand-logo-text-main">EliteDrive</span>
        <span className="ev-brand-logo-text-tagline">Premium Chauffeur</span>
      </div>
    </div>
  )
}

export default EVBrandLogoCard

