import React from 'react'
import './EVStatsRightCard.css'

const EVStatsRightCard: React.FC = () => {
  return (
    <div className="ev-stats-right-card">
      <div className="ev-stats-image">
        <img 
          src="/249487722278563474fe886406ffcfeb844fa8fd.png" 
          alt="Luxury Innovation"
          className="ev-stats-img"
        />
      </div>
      <div className="ev-stats-card-content">
        <div className="ev-stats-icon">
          <img 
            src="/logo.svg" 
            alt="EliteDrive Logo"
            className="ev-stats-icon-img"
          />
        </div>
        <p className="ev-stats-text">
          Empowering Premium Mobility Through Excellence
        </p>
      </div>
    </div>
  )
}

export default EVStatsRightCard

