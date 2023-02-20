import Image from 'next/image'
import React from 'react'
import Help from './homepage/Help'
import Slider from './homepage/Slider'


import "swiper/css"
import "swiper/css/navigation"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper"
import Search from './Search/Search'
import vera from '../public/assets/vera/vera.png'





const Featured = () => {
  return (
    <div className='w-full h-full'>
      <div className='w-full flex items-center justify-center h-full'>
        <div className=' w-full relative flex flex-col items-center justify-center'>
          <div className='lg:max-w-[50%] w-full my-4 px-4'>
            <Search />
          </div>
          <Swiper />
          <div className='w-full bg-[#58E5E8] flex items-center justify-center '>
            <div className='w-full relative h-full  max-w-[1440px]'>
              <Swiper navigation={true} modules={[Navigation]} className='z-0 relative  h-[60vh] max-h-[438px] max-w-[100vw]'>
                <SwiperSlide>
                  <div className='w-full h-max flex flex-col-reverse md:flex-row md:justify-evenly items-center md:mx-12 '>
                    <Image src={vera} alt='woman' className='md:hidden w-full h-full'/>
                    <div className='mx-2 md:mt-0 z-10 px-6 md:w-[60%] md:left-[5%] md:top-[25%] text-left py-8 items-center '>
                      <h3 className='font-bold text-3xl mb-4 md:text-6xl max-w-[820px] text-center'>
                        What can i help you with today
                      </h3>
                      <p className='md:mt-4 text-lg text-center'>
                        Need Assistance? Chat to Vera here
                      </p>
                    </div>
                    <Image src={vera} alt='woman' className='hidden md:block h-full w-full object-contain max-h-[438px]  right-0 bottom-0 z-0'/>
                  {/* <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/0 z-[1]' /> */}
                  </div>
                    
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-full  '>
                    <div className='absolute bottom-8 bg-blue-400/80 rounded-xl p-4 left-20 right-20 text-center py-12'>
                        <h3 className='text-3xl font-bold text-white'>Join our Continuous Care Program</h3>
                    </div>
                    <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/0 z-[1]' />
                    </div>
                    
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured