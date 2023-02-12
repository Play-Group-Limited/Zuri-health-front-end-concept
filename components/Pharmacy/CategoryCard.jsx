import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import baby from '../../public/assets/stockImgs/Pharmacy/categories/baby.png'

const CategoryCard = ({category}) => {

  console.log("cate" , category)
  return (
    <div className='relative mx-2 my-4 md:my-0 w-[310px]'>
      <Link href={category.link}>
        <Image src={category.img} width='310' height="200" alt="baby meds" className='object-contain w-[100%] h-full'/>
        <p className='absolute text-white  font-bold right-5 bottom-5'>
            {category.text}
        </p>
      </Link>
    </div>
  )
}

export default CategoryCard