import React from 'react'
import EVStoryCard from './EVStoryCard'
import EVOverlayCard from './EVOverlayCard'
import './EVStory.css'

const locations = [
  'Camps Bay',
  'V&A Waterfront',
  'Table Mountain',
  'Winelands',
  'Cape Point',
  'Clifton Beaches'
]

const EVStory: React.FC = () => {
  return (
    <section className="ev-story" id="locations">
      <div className="ev-story-container">
        <div className="ev-story-header">
          <div className="ev-story-tag">
            <span>Where We Operate</span>
          </div>
          
          <div className="ev-story-content">
            <div className="ev-story-heading">
              <h2>Premium Chauffeur Service</h2>
              <h2>Across Cape Town's Finest Destinations</h2>
            </div>
            <p className="ev-story-description">
              Experience the beauty of Cape Town with our luxury VW Kombi chauffeur service. Whether you're exploring iconic landmarks, enjoying the pristine beaches, or touring the world-renowned Winelands, our professional chauffeurs ensure seamless, elegant transportation tailored to your itinerary.
            </p>
          </div>
        </div>
        
        <div className="ev-story-locations-grid">
          {locations.map((location, index) => (
            <div key={index} className="ev-story-location-item">
              <span className="ev-story-location-name">{location}</span>
            </div>
          ))}
        </div>
        
        <div className="ev-story-cards">
          <EVStoryCard />
          <EVOverlayCard />
        </div>
      </div>
    </section>
  )
}

export default EVStory
