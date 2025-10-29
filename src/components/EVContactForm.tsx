import React from 'react'
import './EVContactForm.css'

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  message: string
}

interface EVContactFormProps {
  formData: FormData
  onInputChange: (field: keyof FormData, value: string) => void
  onSubmit: (e: React.FormEvent) => void
}

const EVContactForm: React.FC<EVContactFormProps> = ({ 
  formData, 
  onInputChange, 
  onSubmit 
}) => {
  return (
    <div className="ev-contact-form">
      <h2 className="ev-contact-title">Book Your Luxury Chauffeur Service</h2>
      <p className="ev-contact-subtitle">Experience VIP transportation across Cape Town. Select your service tier and duration, and let us handle the rest.</p>
      
      <form className="ev-form" onSubmit={onSubmit}>
        <div className="ev-form-row">
          <div className="ev-form-field">
            <label className="ev-form-label">First Name</label>
            <input
              type="text"
              className="ev-form-input"
              placeholder="John"
              value={formData.firstName}
              onChange={(e) => onInputChange('firstName', e.target.value)}
            />
          </div>
          <div className="ev-form-field">
            <label className="ev-form-label">Last Name</label>
            <input
              type="text"
              className="ev-form-input"
              placeholder="Doe"
              value={formData.lastName}
              onChange={(e) => onInputChange('lastName', e.target.value)}
            />
          </div>
        </div>
        
        <div className="ev-form-row">
          <div className="ev-form-field">
            <label className="ev-form-label">Email Address</label>
            <input
              type="email"
              className="ev-form-input"
              placeholder="john.doe@email.com"
              value={formData.email}
              onChange={(e) => onInputChange('email', e.target.value)}
            />
          </div>
          <div className="ev-form-field">
            <label className="ev-form-label">Phone Number</label>
            <input
              type="tel"
              className="ev-form-input"
              placeholder="+27 XX XXX XXXX"
              value={formData.phone}
              onChange={(e) => onInputChange('phone', e.target.value)}
            />
          </div>
        </div>
        
        <div className="ev-form-field">
          <label className="ev-form-label">Service Details</label>
          <textarea
            className="ev-form-textarea"
            placeholder="Please specify your preferred service tier (Elite Ride, Concierge Companion, or VIP Celebrity Experience), dates, pickup location, and any special requirements..."
            rows={4}
            value={formData.message}
            onChange={(e) => onInputChange('message', e.target.value)}
          />
        </div>
        
        <button type="submit" className="ev-form-button">
          Book Your Chauffeur
        </button>
      </form>
    </div>
  )
}

export default EVContactForm
