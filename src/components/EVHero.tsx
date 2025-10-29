import React from 'react'
import './EVHero.css'

const EVHero: React.FC = () => {
  return (
    <section className="ev-hero" id="home">
      <div className="ev-hero-content">
        <h1 className="ev-hero-title">
          <span className="ev-hero-title-line">LUXURY</span>
          <span className="ev-hero-title-line ev-hero-title-line--secondary">CAR HIRE</span>
        </h1>
        
        <div className="ev-hero-image">
          <img 
            src="/5ed91f6e4ad81d200e3f2271c936245b87455e72.png" 
            alt="Luxury Car" 
            className="ev-hero-car-img"
          />
        </div>
      </div>
    </section>
  )
}

export default EVHero
