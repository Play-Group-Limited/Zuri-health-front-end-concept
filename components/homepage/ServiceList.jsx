import Image from 'next/image'
import React from 'react'
import product from '../../public/assets/product/man.png'
import ServiceCard from './ServiceCard'

const ServiceList = () => {
    const products = [
        {
            id: 1,
            img: '/assets/product/man.png',
            text: 'Engage with a doctor'
        },
        {
            id: 2,
            img: '/assets/product/1.png',
            text: 'Order Medicine'
        },
        {
            id: 3,
            img: '/assets/product/2.png',
            text: 'Lab Tests & diagnostics'
        },
        {
            id: 4,
            img: '/assets/product/3.png',
            text: 'Wellness and more'
        },
        {
            id: 4,
            img: '/assets/product/4.png',
            text: 'Continuos Care Program'
        }
    ]

  return (
    <div className='flex flex-row'>
        {/* card */}
        {products.map((product) => (
            <ServiceCard key={product.id} product={product}/>
        ))}
        
        
    </div>
  )
}

export default ServiceList