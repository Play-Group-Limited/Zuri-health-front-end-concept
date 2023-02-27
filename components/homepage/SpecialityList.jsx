import Image from 'next/image'
import React from 'react'

import SpecialityCard from './SpecialityCard'

const SpecialityList = () => {

    const products = [
        {
            id: 1,
            img: '/assets/icons/heart.png',
            text: 'Cardiology'
        },
        {
            id: 2,
            img: '/assets/icons/mh.png',
            text: 'Mental Health'
        },
        {
            id: 3,
            img: '/assets/icons/belly.png',
            text: 'Gatso'
        },
        {
            id: 4,
            img: '/assets/icons/brain.png',
            text: 'Pediatrics'
        },
        {
            id: 5,
            img: '/assets/icons/bone.png',
            text: 'Physiology'
        },
        {
            id: 6,
            img: '/assets/icons/tooth.png',
            text: 'Dentistry'
        },
    ]

  return (
    <div className='md:grid-rows-2 md:grid-cols-3 lg:grid-cols-6 lg:grid-rows-1 grid grid-cols-2 gap-2 my-12 md:my-0 md:flex-row md:justify-evenly items-center '>
        {/* card */}
        {products.map((product) => (
            <SpecialityCard key={product.id} product={product}/>
        ))}
       
       
    </div>
  )
}

export default SpecialityList