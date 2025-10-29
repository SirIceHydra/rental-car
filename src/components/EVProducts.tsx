import React from 'react'
import EVProductCard from './EVProductCard'
import './EVProducts.css'

interface ServiceTier {
  id: number
  tierName: string
  description: string
  features: string[]
  imageSrc: string
}

const serviceTiers: ServiceTier[] = [
  {
    id: 1,
    tierName: 'Elite Ride',
    description: 'A premium point-to-point luxury chauffeur experience in a stylish VW Kombi. Comfortable, discreet, on-time rides wherever you need to be.',
    features: [
      'Professional chauffeur',
      'Luxury seating and finishes',
      'Complimentary bottled water'
    ],
    imageSrc: '/2024-mercedes-benz-e-300-aus-81.jpg'
  },
  {
    id: 2,
    tierName: 'Concierge Companion',
    description: 'Your chauffeur stays available throughout the day—suggesting hotspots, guiding your journey, and helping with itinerary planning.',
    features: [
      'Dedicated on-call chauffeur',
      'Local guidance and recommendations',
      'Premium refreshments onboard'
    ],
    imageSrc: '/bmw-7-series-overview-g70.webp'
  },
  {
    id: 3,
    tierName: 'VIP Celebrity Experience',
    description: 'Chauffeur acts as a private assistant—shopping help, protection, red-carpet-style treatment. Ultimate luxury on the move.',
    features: [
      'Personal shopping assistant',
      'Bodyguard-style presence',
      'In-vehicle entertainment + luxury amenities'
    ],
    imageSrc: '/rangeroverpsort.jpg'
  }
]

const EVProducts: React.FC = () => {
  return (
    <section className="ev-products" id="services">
      <div className="ev-products-container">
        <div className="ev-products-header">
          <div className="ev-products-tag">
            <span>Service Tiers</span>
          </div>
          <h2 className="ev-products-title">
            Choose Your Luxury Experience
          </h2>
        </div>
        
        <div className="ev-products-grid">
          {serviceTiers.map((tier) => (
            <EVProductCard key={tier.id} serviceTier={tier} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default EVProducts
