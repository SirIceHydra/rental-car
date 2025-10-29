import React from 'react'
import EVNavbar from './EVNavbar'
import EVHero from './EVHero'
import EVCounters from './EVCounters'
import EVProducts from './EVProducts'
import EVStory from './EVStory'
import EVTestimonials from './EVTestimonials'
import EVCarousel from './EVCarousel'
import EVHowItWorks from './EVHowItWorks'
import EVContact from './EVContact'
import EVFooter from './EVFooter'
import './EVSection.css'

const EVSection: React.FC = () => {
  return (
    <div className="ev-section">
      <EVNavbar />
      <EVHero />
      <EVCounters />
      <EVProducts />
      <EVStory />
      <EVTestimonials />
      <EVCarousel />
      <EVHowItWorks />
      <EVContact />
      <EVFooter />
    </div>
  )
}

export default EVSection
