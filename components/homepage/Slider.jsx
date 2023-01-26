import Image from 'next/image'
import React from 'react'
import woman from '../../public/assets/images/woman1.png'

import "swiper/css"
import "swiper/css/navigation"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper"

const Slider = () => {
  return (
    <div className='rounded-3xl w-full h-full relative'>
      <Swiper navigation={true} modules={[Navigation]} className='z-0'>
          <SwiperSlide>
            <div className='w-full  relative '>
              <Image src={woman} alt='woman' className='w-full h-full object-fill'/>
              <div className='absolute bottom-8 bg-blue-400/80 rounded-full p-4 left-20 right-20 text-center py-12'>
                  <h3 className='text-3xl font-bold text-white'>Join our <br /> Continuous <br /> Care <br /> Program</h3>
              </div>
              <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/0 z-[1]' />
            </div>
            
          </SwiperSlide>
          <SwiperSlide>
            <div className='w-full relative '>
              <Image src={woman} alt='woman' className='w-full h-full object-fill'/>
              <div className='absolute bottom-8 bg-blue-400/80 rounded-xl p-4 left-20 right-20 text-center py-12'>
                  <h3 className='text-3xl font-bold text-white'>Join our Continuous Care Program</h3>
              </div>
              <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/0 z-[1]' />
            </div>
            
        </SwiperSlide>
      </Swiper>

      
        
    </div>
  )
}

export default Slider