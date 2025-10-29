import React from 'react'
import './EVFooterLinks.css'

interface FooterLink {
  text: string
  href: string
}

interface FooterColumn {
  title: string
  links: FooterLink[]
}

const footerColumns: FooterColumn[] = [
  {
    title: 'Quick Links',
    links: [
      { text: 'About Us', href: '#about' },
      { text: 'Service Tiers', href: '#services' },
      { text: 'Where We Operate', href: '#locations' },
      { text: 'Contact Us', href: '#contact' }
    ]
  },
  {
    title: 'Contact Info',
    links: [
      { text: 'Phone: +27 21 XXX XXXX', href: 'tel:+2721XXXXXXX' },
      { text: 'Email: info@elitedrive.co.za', href: 'mailto:info@elitedrive.co.za' },
      { text: 'Location: Cape Town, South Africa', href: '#contact' }
    ]
  },
  {
    title: 'Legal',
    links: [
      { text: 'Terms & Conditions', href: '#terms' },
      { text: 'Privacy Policy', href: '#privacy' },
      { text: 'Service Agreement', href: '#service' }
    ]
  }
]

const EVFooterLinks: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="ev-footer-links">
      {footerColumns.map((column, index) => (
        <div key={index} className="ev-footer-column">
          <h3 className="ev-footer-column-title">{column.title}</h3>
          <div className="ev-footer-column-links">
            {column.links.map((link, linkIndex) => (
              <a 
                key={linkIndex}
                href={link.href} 
                className="ev-footer-link"
                onClick={(e) => {
                  if (link.href.startsWith('#')) {
                    e.preventDefault()
                    scrollToSection(link.href.substring(1))
                  }
                }}
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default EVFooterLinks
