import React from 'react'
import EVCarouselImage from './EVCarouselImage'
import EVCarouselDots from './EVCarouselDots'
import './EVCarousel.css'

interface Amenity {
  id: number
  name: string
  icon?: string
}

const amenities: Amenity[] = [
  { id: 1, name: 'TV Screens + Entertainment' },
  { id: 2, name: 'Snacks and Beverages' },
  { id: 3, name: 'High-Speed WiFi' },
  { id: 4, name: 'Tinted Privacy Glass' },
  { id: 5, name: 'Climate-Controlled Comfort' }
]

const carouselImages = [
  {
    id: 1,
    src: '/comfort/comfort.webp',
    alt: 'Luxury Kombi Interior Comfort'
  },
  {
    id: 2,
    src: '/comfort/luxurycomfort.webp',
    alt: 'Premium Chauffeur Vehicle Interior'
  },
  {
    id: 3,
    src: '/comfort/tvscreen.avif',
    alt: 'TV Screens and Entertainment Onboard'
  }
]

const EVCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = React.useState(0)

  const handleDotClick = (index: number) => {
    setActiveIndex(index)
  }

  return (
    <section className="ev-carousel" id="amenities">
      <div className="ev-carousel-container">
        <div className="ev-carousel-header">
          <div className="ev-carousel-tag">
            <span>Luxury Amenities</span>
          </div>
          <h2 className="ev-carousel-title">
            Premium Comfort Onboard
          </h2>
        </div>
        
        <div className="ev-carousel-amenities-list">
          {amenities.map((amenity) => (
            <div key={amenity.id} className="ev-carousel-amenity-item">
              <span className="ev-carousel-amenity-icon">✓</span>
              <span className="ev-carousel-amenity-name">{amenity.name}</span>
            </div>
          ))}
        </div>
        
        <div className="ev-carousel-content">
          <div className="ev-carousel-images">
            {carouselImages.map((image, index) => (
              <EVCarouselImage 
                key={image.id} 
                image={image} 
                isActive={index === activeIndex}
              />
            ))}
          </div>
          
          <EVCarouselDots 
            totalDots={carouselImages.length}
            activeIndex={activeIndex}
            onDotClick={handleDotClick}
          />
        </div>
      </div>
    </section>
  )
}

export default EVCarousel
