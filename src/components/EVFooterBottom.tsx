import React from 'react'
import './EVFooterBottom.css'

const EVFooterBottom: React.FC = () => {
  return (
    <div className="ev-footer-bottom">
      <div className="ev-footer-copyright">
        <span>© 2024 EliteDrive Luxury Chauffeur Service. All rights reserved.</span>
      </div>
      
      <div className="ev-footer-legal">
        <a href="#terms" className="ev-footer-legal-link">
          Terms & Conditions
        </a>
        <a href="#privacy" className="ev-footer-legal-link">
          Privacy Policy
        </a>
      </div>
    </div>
  )
}

export default EVFooterBottom
