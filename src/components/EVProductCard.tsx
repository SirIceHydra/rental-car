import React from 'react'
import './EVProductCard.css'

interface ServiceTier {
  id: number
  tierName: string
  description: string
  features: string[]
  imageSrc: string
}

interface EVProductCardProps {
  serviceTier: ServiceTier
}

const EVProductCard: React.FC<EVProductCardProps> = ({ serviceTier }) => {
  return (
    <div className="ev-product-card">
      <div className="ev-product-image-container">
        <div className="ev-product-image">
          <img 
            src={serviceTier.imageSrc} 
            alt={serviceTier.tierName}
            className="ev-product-img"
          />
        </div>
        
        <div className="ev-product-content">
          <h3 className="ev-product-title">{serviceTier.tierName}</h3>
          <p className="ev-product-description">{serviceTier.description}</p>
          
          <div className="ev-product-features">
            {serviceTier.features.map((feature, index) => (
              <div key={index} className="ev-product-feature">
                <span className="ev-product-feature-icon">✓</span>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default EVProductCard
