import React, { useState } from 'react'
import EVContactForm from './EVContactForm'
import EVContactImage from './EVContactImage'
import './EVContact.css'

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  message: string
}

const EVContact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Booking inquiry submitted:', formData)
    // Handle booking inquiry submission here
  }

  return (
    <section className="ev-contact" id="contact">
      <div className="ev-contact-container">
        <EVContactForm 
          formData={formData}
          onInputChange={handleInputChange}
          onSubmit={handleSubmit}
        />
        <EVContactImage />
      </div>
    </section>
  )
}

export default EVContact
