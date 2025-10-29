import React from 'react'
import EVFooterLinks from './EVFooterLinks'
import EVFooterBottom from './EVFooterBottom'
import './EVFooter.css'

const EVFooter: React.FC = () => {
  return (
    <footer className="ev-footer">
      <div className="ev-footer-background">
        <img 
          src="/bo-kaap.jpg" 
          alt="Bo Kaap Background"
          className="ev-footer-bg-img"
        />
        <div className="ev-footer-overlay"></div>
      </div>
      
      <div className="ev-footer-content">
        <div className="ev-footer-header">
          <div className="ev-footer-logo">
            <img 
              src="/logo.svg" 
              alt="EliteDrive Logo"
              className="ev-footer-logo-img"
            />
          </div>
          <EVFooterLinks />
        </div>
        
        <EVFooterBottom />
      </div>
    </footer>
  )
}

export default EVFooter
