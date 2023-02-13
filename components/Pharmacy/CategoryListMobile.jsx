import Image from 'next/image'
import React from 'react'
import CategoryCard from './CategoryCard'


import "swiper/css"
import "swiper/css/navigation"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper"

const CategoryListMobile = () => {

  
  return (
    <div className='flex flex-row'>
      <Swiper navigation={true} modules={[Navigation]} className='z-0'>
        <SwiperSlide>
          <div className='relative mx-2 my-4 md:my-0 w-[310px]'>
            <Image src="/assets/stockImgs/Pharmacy/categories/baby.png" width='310' height="200" alt="baby meds" className='object-contain w-[100%] h-full'/>
            <p className='absolute text-white  font-bold right-5 bottom-5'>
              Mum and Baby
            </p>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <div className='relative mx-2 my-4 md:my-0 w-auto'>
            <Image src="/assets/stockImgs/Pharmacy/categories/cosmetics.png" width='310' height="200" alt="baby meds" className='object-contain w-[100%] h-full'/>
            <p className='absolute text-white  font-bold right-5 bottom-5'>
              Cosemetics
            </p>
          </div>
        </SwiperSlide> */}
        {/* <SwiperSlide>
          <div className='relative mx-2 my-4 md:my-0 w-[310px]'>
            <Image src="/assets/stockImgs/Pharmacy/categories/flu.png" width='310' height="200" alt="baby meds" className='object-contain w-[100%] h-full'/>
            <p className='absolute text-white  font-bold right-5 bottom-5'>
              Cough and cold
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative mx-2 my-4 md:my-0 w-[310px]'>
            <Image src="/assets/stockImgs/Pharmacy/categories/all.png" width='310' height="200" alt="baby meds" className='object-contain w-[100%] h-full'/>
            <p className='absolute text-white  font-bold right-5 bottom-5'>
              View All
            </p>
          </div>
        </SwiperSlide> */}
      </Swiper>
    </div>

    
      
  )
}

export default CategoryListMobile