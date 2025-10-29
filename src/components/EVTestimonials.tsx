import React from 'react'
import EVTestimonialCard from './EVTestimonialCard'
import EVStatsLeftCard from './EVStatsLeftCard'
import EVBrandLogoCard from './EVBrandLogoCard'
import EVBrandCard from './EVBrandCard'
import './EVTestimonials.css'

const EVTestimonials: React.FC = () => {
  return (
    <section className="ev-testimonials">
      <div className="ev-testimonials-container">
        <div className="ev-testimonials-header">
          <div className="ev-testimonials-tag">
            <span>Client Testimonials</span>
          </div>
          <h2 className="ev-testimonials-title">
            Exceptional Experiences Across Cape Town
          </h2>
        </div>
        
        <div className="ev-testimonials-grid">
          <div className="ev-testimonials-col-left">
            <EVTestimonialCard />
            <EVStatsLeftCard />
          </div>
          <div className="ev-testimonials-col-middle">
            <EVBrandLogoCard />
          </div>
          <div className="ev-testimonials-col-right">
            <EVBrandCard />
          </div>
        </div>
      </div>
    </section>
  )
}

export default EVTestimonials
