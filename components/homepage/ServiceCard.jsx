import Image from 'next/image'
import React from 'react'

const ServiceCard = ({product}) => {
  return (
    <div className='w-full h-full rounded-3xl p-4 py-6 relative'>
        <Image src={product.img} alt='' width={50} height={50} className='w-full h-full object-contain' />
        <div className='absolute bottom-10 left-[30%] right-[30%] items-center justify-center text-center'>
            <p className='font-bold text-white text-lg'>Engage with doctor</p>
        </div>
    </div>
  )
}

export default ServiceCard