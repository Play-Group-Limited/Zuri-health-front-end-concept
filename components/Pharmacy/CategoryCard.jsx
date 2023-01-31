import Image from 'next/image'
import React from 'react'

import baby from '../../public/assets/stockImgs/Pharmacy/categories/baby.png'

const CategoryCard = () => {
  return (
    <div className='relative mx-2 my-4 md:my-0 w-full'>
        <Image src={baby} alt="baby meds" className='object-contain w-full h-full'/>
        <p className='absolute text-white  font-bold right-5 bottom-5'>
            Mum and Baby
        </p>
    </div>
  )
}

export default CategoryCard