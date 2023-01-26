import Image from 'next/image'
import React from 'react'
import product from '../../public/assets/product/man.png'
import ServiceCard from './ServiceCard'

const ServiceList = ({setActive, products, active }) => {

  return (
    <div className='flex flex-col md:flex-row'>
        {/* card */}
        {products.map((product) => (
            <ServiceCard key={product.id} product={product} setActive={setActive} active={active}/>
        ))}
        
        
    </div>
  )
}

export default ServiceList