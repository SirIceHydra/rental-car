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
    number: '50',
    unit: '+',
    description: 'Premium Vehicles in Fleet'
  },
  {
    id: 2,
    number: '98',
    unit: '%',
    description: 'Customer Satisfaction Rate'
  },
  {
    id: 3,
    number: '5',
    unit: 'Years',
    description: 'Trusted Service Excellence'
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
