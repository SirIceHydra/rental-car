import React from 'react'
import EVProductCard from './EVProductCard'
import './EVProducts.css'

interface Product {
  id: number
  title: string
  description: string
  originalPrice: string
  salePrice: string
  imageSrc: string
}

const products: Product[] = [
  {
    id: 1,
    title: 'BMW 7 Series',
    description: 'Ultimate luxury sedan with executive comfort and cutting-edge technology. Perfect for business meetings and special occasions.',
    originalPrice: 'R 4,500',
    salePrice: 'R 3,800',
    imageSrc: '/bmw-7-series-overview-g70.webp'
  },
  {
    id: 2,
    title: 'Mercedes-Benz E-Class',
    description: 'Sophisticated elegance meets advanced technology. Ideal for discerning clients who demand the finest in automotive luxury.',
    originalPrice: 'R 3,200',
    salePrice: 'R 2,800',
    imageSrc: '/2024-mercedes-benz-e-300-aus-81.jpg'
  },
  {
    id: 3,
    title: 'Range Rover Sport',
    description: 'Premium SUV combining luxury with capability. Perfect for exploring Johannesburg and surrounding areas in ultimate comfort.',
    originalPrice: 'R 4,800',
    salePrice: 'R 4,200',
    imageSrc: '/rangeroverpsort.jpg'
  }
]

const EVProducts: React.FC = () => {
  return (
    <section className="ev-products" id="fleet">
      <div className="ev-products-container">
        <div className="ev-products-header">
          <div className="ev-products-tag">
            <span>Premium Fleet</span>
          </div>
          <h2 className="ev-products-title">
            Discover Our Luxury Vehicle Collection
          </h2>
        </div>
        
        <div className="ev-products-grid">
          {products.map((product) => (
            <EVProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default EVProducts
