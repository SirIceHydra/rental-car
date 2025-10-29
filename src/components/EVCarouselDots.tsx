import React from 'react'
import './EVCarouselDots.css'

interface EVCarouselDotsProps {
  totalDots: number
  activeIndex: number
  onDotClick: (index: number) => void
}

const EVCarouselDots: React.FC<EVCarouselDotsProps> = ({ 
  totalDots, 
  activeIndex, 
  onDotClick 
}) => {
  return (
    <div className="ev-carousel-dots">
      {Array.from({ length: totalDots }, (_, index) => (
        <button
          key={index}
          className={`ev-carousel-dot ${index === activeIndex ? 'ev-carousel-dot--active' : ''}`}
          onClick={() => onDotClick(index)}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  )
}

export default EVCarouselDots
