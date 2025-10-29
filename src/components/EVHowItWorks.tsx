import React from 'react'
import './EVHowItWorks.css'

interface Step {
  id: number
  number: string
  title: string
  description: string
}

const steps: Step[] = [
  {
    id: 1,
    number: '01',
    title: 'Choose Your Tier + Service Duration',
    description: 'Select from Elite Ride, Concierge Companion, or VIP Celebrity Experience. Choose your service duration—from a few hours to multiple days.'
  },
  {
    id: 2,
    number: '02',
    title: 'Schedule Pickup — Any Time, Anywhere in Cape Town',
    description: 'Tell us when and where you need us. Our professional chauffeurs will arrive punctually at your requested location across Cape Town.'
  },
  {
    id: 3,
    number: '03',
    title: 'Enjoy a Personalized VIP Travel Experience',
    description: 'Relax and enjoy luxury comfort while your dedicated chauffeur handles navigation, local insights, and ensures every detail of your journey is perfect.'
  }
]

const EVHowItWorks: React.FC = () => {
  return (
    <section className="ev-how-it-works" id="how-it-works">
      <div className="ev-how-it-works-container">
        <div className="ev-how-it-works-header">
          <div className="ev-how-it-works-tag">
            <span>How It Works</span>
          </div>
          <h2 className="ev-how-it-works-title">
            Simple Steps to Your Luxury Experience
          </h2>
        </div>
        
        <div className="ev-how-it-works-steps">
          {steps.map((step) => (
            <div key={step.id} className="ev-how-it-works-step">
              <div className="ev-how-it-works-step-number">
                {step.number}
              </div>
              <div className="ev-how-it-works-step-content">
                <h3 className="ev-how-it-works-step-title">{step.title}</h3>
                <p className="ev-how-it-works-step-description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EVHowItWorks

