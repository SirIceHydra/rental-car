import React from 'react'
import './EVCarouselImage.css'

interface CarouselImage {
  id: number
  src: string
  alt: string
}

interface EVCarouselImageProps {
  image: CarouselImage
  isActive: boolean
}

const EVCarouselImage: React.FC<EVCarouselImageProps> = ({ image, isActive }) => {
  return (
    <div className={`ev-carousel-image ${isActive ? 'ev-carousel-image--active' : ''}`}>
      <img 
        src={image.src} 
        alt={image.alt}
        className="ev-carousel-img"
      />
    </div>
  )
}

export default EVCarouselImage
