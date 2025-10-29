import React from 'react'
import './EVCounters.css'

interface CounterData {
  id: number
  number: string
  unit: string
  description: string
}

const counters: CounterData[] = [
  {
    id: 1,
    number: '24',
    unit: '/7',
    description: 'Available Any Time, Every Day'
  },
  {
    id: 2,
    number: '500',
    unit: '+',
    description: 'VIP Clients Served in Cape Town'
  },
  {
    id: 3,
    number: '100',
    unit: '%',
    description: 'Professional Chauffeur Certified'
  }
]

const EVCounters: React.FC = () => {
  return (
    <section className="ev-counters" id="about">
      <div className="ev-counters-container">
        {counters.map((counter) => (
          <div key={counter.id} className="ev-counter">
            <div className="ev-counter-numbers">
              <span className="ev-counter-number">{counter.number}</span>
              <span className="ev-counter-unit">{counter.unit}</span>
            </div>
            <p className="ev-counter-description">{counter.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default EVCounters
