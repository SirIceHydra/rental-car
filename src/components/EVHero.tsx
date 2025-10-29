import React from 'react'
import './EVHero.css'

const EVHero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="ev-hero" id="home">
      <div className="ev-hero-content">
        <h1 className="ev-hero-title">
          <span className="ev-hero-title-line">LUXURY</span>
          <div className="ev-hero-image">
            <img 
              src="/herocar.svg" 
              alt="Luxury Car Hire" 
              className="ev-hero-car-img"
            />
          </div>
          <span className="ev-hero-title-line ev-hero-title-line--secondary">CAR HIRE</span>
        </h1>
        
        <p className="ev-hero-subheadline">
          Your private driver — comfort, privacy, and VIP treatment across Cape Town
        </p>

        <div className="ev-hero-cta-buttons">
          <button 
            className="ev-hero-cta-primary"
            onClick={() => scrollToSection('contact')}
          >
            <span>Book Your Chauffeur</span>
            <img 
              src="/425792dee1b0ac56cdb06123bdd57d7fd5405a91.svg" 
              alt="Arrow" 
              className="ev-cta-arrow"
            />
          </button>
          <button 
            className="ev-hero-cta-secondary"
            onClick={() => scrollToSection('services')}
          >
            Explore Service Tiers
          </button>
        </div>
      </div>
    </section>
  )
}

export default EVHero
