import React from 'react'
import './EVStoryCard.css'

const EVStoryCard: React.FC = () => {
  return (
    <div className="ev-story-card">
      <div className="ev-story-video">
        <div className="ev-story-video-container">
          <img 
            src="/87ab842bad111d3aefca28451e56e6dcf78f86e6.png" 
            alt="Luxury Car Fleet Video"
            className="ev-story-video-img"
          />
          <div className="ev-story-play-button">
            <img 
              src="/3f611cbce12427f8ed09eb3f18d7e68186b97b4e.svg" 
              alt="Play Button"
              className="ev-story-play-icon"
            />
          </div>
        </div>
      </div>
      
      <div className="ev-story-card-content">
        <h3 className="ev-story-card-title">
          Experience Premium Fleet Excellence
        </h3>
        <div className="ev-story-card-description">
          <p>Discover our meticulously maintained luxury vehicles</p>
          <p>designed for the most discerning clients in Johannesburg.</p>
        </div>
      </div>
    </div>
  )
}

export default EVStoryCard
