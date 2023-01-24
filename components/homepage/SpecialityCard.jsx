import Image from 'next/image'
import React from 'react'
import brain from '../../public/assets/icons/brain.png'

const SpecialityCard = ({product}) => {
  return (
    <div className='flex flex-col relative mx-2 items-center justify-center'>
        <div className='bg-white p-2 w-24 h-24 rounded-full flex items-center justify-center'>
            <Image src={product.img} alt='brains' width={30} height={30}/>
        </div>
        <p className='my-4 text-center whitespace-nowrap'>{product.text}</p>
    </div>
  )
}

export default SpecialityCard