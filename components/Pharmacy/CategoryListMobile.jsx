import React from 'react'
import CategoryCard from './CategoryCard'
import one from '../../public/assets/stockImgs/Pharmacy/categories/baby.png'
import two from '../../public/assets/stockImgs/Pharmacy/categories/cosmetics.png'
import three from '../../public/assets/stockImgs/Pharmacy/categories/flu.png'
import four from '../../public/assets/stockImgs/Pharmacy/categories/all.png'
import Link from 'next/link'
import Image from 'next/image'

const CategoryListMobile = () => {
 
  
  return (
    <div className='flex flex-row w-full'>
      <div className='relative mx-2 my-4 md:my-0'>
        <Link href='/Categories'>
          <Image src={one} alt="baby meds" className='object-contain h-full'/>
          <p className='absolute text-white  font-bold right-5 bottom-5'>
            Mum &amp; Baby
          </p>
        </Link>
      </div>
      <div className='relative mx-2 my-4 md:my-0 '>
        <Link href='/Categories'>
          <Image src={two} alt="baby meds" className='object-contain h-full'/>
          <p className='absolute text-white  font-bold right-5 bottom-5'>
            Cosmetics
          </p>
        </Link>
      </div>
      <div className='relative mx-2 my-4 md:my-0 '>
        <Link href='/Categories'>
          <Image src={three} alt="baby meds" className='object-conta%] h-full'/>
          <p className='absolute text-white  font-bold right-5 bottom-5'>
            Cough &amp; Cold
          </p>
        </Link>
      </div>
      <div className='relative mx-2 my-4 md:my-0 '>
        <Link href='/Categories'>
          <Image src={four} alt="baby meds" className='object-contai] h-full'/>
          <p className='absolute text-white  font-bold right-5 bottom-5'>
            View All
          </p>
        </Link>
      </div>
    </div>
  )
}

export default CategoryListMobile