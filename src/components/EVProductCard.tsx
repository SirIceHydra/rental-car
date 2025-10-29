import React from 'react'
import './EVProductCard.css'

interface Product {
  id: number
  title: string
  description: string
  originalPrice: string
  salePrice: string
  imageSrc: string
}

interface EVProductCardProps {
  product: Product
}

const EVProductCard: React.FC<EVProductCardProps> = ({ product }) => {
  return (
    <div className="ev-product-card">
      <div className="ev-product-image-container">
        <div className="ev-product-image">
          <img 
            src={product.imageSrc} 
            alt={product.title}
            className="ev-product-img"
          />
        </div>
        
        <div className="ev-product-content">
          <h3 className="ev-product-title">{product.title}</h3>
          <p className="ev-product-description">{product.description}</p>
        </div>
      </div>
      
      <div className="ev-product-pricing">
        <span className="ev-product-original-price">{product.originalPrice}</span>
        <span className="ev-product-sale-price">{product.salePrice}</span>
      </div>
    </div>
  )
}

export default EVProductCard
