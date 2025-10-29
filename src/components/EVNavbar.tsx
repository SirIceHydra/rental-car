import React, { useState } from 'react'
import './EVNavbar.css'

const EVNavbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsMobileMenuOpen(false) // Close mobile menu after navigation
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className="ev-navbar">
      <div className="ev-navbar-container">
        <div className="ev-navbar-logo" onClick={() => scrollToSection('home')}>
          <img 
            src="/logo.svg" 
            alt="EliteDrive Logo" 
            className="ev-logo-img"
          />
        </div>
        
        {/* Desktop Navigation */}
        <div className="ev-navbar-links">
          <a href="#about" className="ev-nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('about') }}>About</a>
          <a href="#fleet" className="ev-nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('fleet') }}>Our Fleet</a>
          <a href="#services" className="ev-nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('services') }}>Services</a>
          <a href="#contact" className="ev-nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}>Contact Us</a>
        </div>
        
        <button className="ev-navbar-cta" onClick={() => scrollToSection('contact')}>
          <span>Book Now</span>
          <img 
            src="/425792dee1b0ac56cdb06123bdd57d7fd5405a91.svg" 
            alt="Arrow" 
            className="ev-cta-arrow"
          />
        </button>

        {/* Mobile Hamburger Button */}
        <button 
          className={`ev-hamburger ${isMobileMenuOpen ? 'ev-hamburger--open' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span className="ev-hamburger-line"></span>
          <span className="ev-hamburger-line"></span>
          <span className="ev-hamburger-line"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`ev-mobile-menu ${isMobileMenuOpen ? 'ev-mobile-menu--open' : ''}`}>
        <div className="ev-mobile-menu-content">
          <a href="#about" className="ev-mobile-link" onClick={(e) => { e.preventDefault(); scrollToSection('about') }}>About</a>
          <a href="#fleet" className="ev-mobile-link" onClick={(e) => { e.preventDefault(); scrollToSection('fleet') }}>Our Fleet</a>
          <a href="#services" className="ev-mobile-link" onClick={(e) => { e.preventDefault(); scrollToSection('services') }}>Services</a>
          <a href="#contact" className="ev-mobile-link" onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}>Contact Us</a>
          <button className="ev-mobile-cta" onClick={() => scrollToSection('contact')}>
            <span>Book Now</span>
            <img 
              src="/425792dee1b0ac56cdb06123bdd57d7fd5405a91.svg" 
              alt="Arrow" 
              className="ev-cta-arrow"
            />
          </button>
        </div>
      </div>
    </nav>
  )
}

export default EVNavbar
