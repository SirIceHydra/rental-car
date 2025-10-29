import React, { useState } from 'react'
import EVCarouselImage from './EVCarouselImage'
import EVCarouselDots from './EVCarouselDots'
import './EVCarousel.css'

interface CarouselImage {
  id: number
  src: string
  alt: string
}

const carouselImages: CarouselImage[] = [
  {
    id: 1,
    src: '/fcc714bb60c3fa48408d51524472d118e4950434.png',
    alt: 'EV Car Interior 1'
  },
  {
    id: 2,
    src: '/01b1cb2d9a0d7c6b8dc35ddbf15a2272ee7cbca3.png',
    alt: 'EV Car Interior 2'
  },
  {
    id: 3,
    src: '/bcae4889dd6b37351a23fdf18c77b74782dedf13.png',
    alt: 'EV Car Interior 3'
  }
]

const EVCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleDotClick = (index: number) => {
    setActiveIndex(index)
  }

  return (
    <section className="ev-carousel">
      <div className="ev-carousel-container">
        <div className="ev-carousel-header">
          <div className="ev-carousel-tag">
            <span>Versatile Power</span>
          </div>
          <h2 className="ev-carousel-title">
            Future-Ready Comfort
          </h2>
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
