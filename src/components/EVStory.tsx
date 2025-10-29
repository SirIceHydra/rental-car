import React from 'react'
import EVStoryCard from './EVStoryCard'
import EVOverlayCard from './EVOverlayCard'
import './EVStory.css'

const EVStory: React.FC = () => {
  return (
    <section className="ev-story" id="services">
      <div className="ev-story-container">
        <div className="ev-story-header">
          <div className="ev-story-tag">
            <span>Our Story</span>
          </div>
          
          <div className="ev-story-content">
            <div className="ev-story-heading">
              <h2>Excellence in Every Journey,</h2>
              <h2>Luxury in Every Detail</h2>
            </div>
            <p className="ev-story-description">
              We are Johannesburg's premier luxury car rental service, dedicated to providing exceptional experiences. From executive transport to special occasions, we deliver unmatched service with our meticulously maintained premium fleet.
            </p>
          </div>
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
