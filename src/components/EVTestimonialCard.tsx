import React from 'react'
import './EVTestimonialCard.css'

const EVTestimonialCard: React.FC = () => {
  return (
    <div className="ev-testimonial-card">
      <div className="ev-testimonial-header">
        <div className="ev-testimonial-title-section">
          <div className="ev-testimonial-title">
            <h3>What</h3>
            <h3>People Say</h3>
          </div>
          <div className="ev-testimonial-icon">
            <img 
              src="/logo.svg" 
              alt="EliteDrive Logo"
              className="ev-testimonial-icon-img"
            />
          </div>
        </div>
        <p className="ev-testimonial-subtitle">VIP Clients in Cape Town</p>
      </div>
      
      <div className="ev-testimonial-footer">
        <div className="ev-testimonial-stats">
          <div className="ev-testimonial-number">
            <img 
              src="/111f34f7d2b9c6f69f98d83429b39ef4b7b63ccf.png" 
              alt="Number"
              className="ev-testimonial-number-img"
            />
            <span>500+ VIP Clients Served</span>
          </div>
        </div>
        <div className="ev-testimonial-price">
          <span>5-Star Rated</span>
        </div>
      </div>
    </div>
  )
}

export default EVTestimonialCard
