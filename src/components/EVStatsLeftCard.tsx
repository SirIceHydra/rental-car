import React from 'react'
import './EVStatsLeftCard.css'

const EVStatsLeftCard: React.FC = () => {
  return (
    <div className="ev-stats-left-card">
      <div className="ev-stats-left-content">
        <div className="ev-stats-tag">
          <span>elitedrive.co.za</span>
        </div>
        <div className="ev-stats-counter">
          <div className="ev-stats-numbers">
            <span>50</span>
            <span>+</span>
          </div>
          <p className="ev-stats-description">Premium Vehicles</p>
        </div>
      </div>
      <img 
        src="/ffc6f2e2919f8fb1505d2577b77eb7a7845f5b05.png" 
        alt="Luxury Fleet Background"
        className="ev-stats-bg-img"
      />
    </div>
  )
}

export default EVStatsLeftCard

