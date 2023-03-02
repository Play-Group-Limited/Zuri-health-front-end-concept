import Image from 'next/image'
import React from 'react'

import SpecialityCard from './SpecialityCard'
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide} from "swiper/react"
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper"

import child from '../../public/assets/icons/brain.png'
import heart from '../../public/assets/icons/heart.png'
import mental from '../../public/assets/icons/mh.png'
import gasto from '../../public/assets/icons/belly.png'
import bone from '../../public/assets/icons/bone.png'
import tooth from '../../public/assets/icons/tooth.png'


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

    SwiperCore.use([Autoplay]);

  return (
    <div className='w-full  flex items-center justify-center'>
        <div className='max-w-[40vw]'>
            <Swiper navigation={true} autoplay={{ delay: 3000 }} loop={true}  modules={[Navigation]} className='z-0 max-h-[100px] w-full  hidden lg:block'>
            <SwiperSlide>
                <div className='flex flex-row items-center justify-center'>
                    <div className='flex flex-col relative mx-2  items-center justify-center'>
                        <div className='bg-white p-2 w-24 h-24 md:w-16 md:h-16 rounded-full flex items-center justify-center'>
                            <Image src={child} alt='brains' width={30} height={30}/>
                        </div>
                        <p className='my-4 text-center whitespace-nowrap text-xs'>Chilrens Medicine</p>
                    </div>
                    <div className='flex flex-col relative mx-2  items-center justify-center'>
                        <div className='bg-white p-2 w-24 h-24 md:w-16 md:h-16 rounded-full flex items-center justify-center'>
                            <Image src={mental} alt='brains' width={30} height={30}/>
                        </div>
                        <p className='my-4 text-center whitespace-nowrap text-xs'>Mental Health</p>
                    </div>
                    <div className='flex flex-col relative mx-2  items-center justify-center'>
                        <div className='bg-white p-2 w-24 h-24 md:w-16 md:h-16 rounded-full flex items-center justify-center'>
                            <Image src={gasto} alt='brains' width={30} height={30}/>
                        </div>
                        <p className='my-4 text-center whitespace-nowrap text-xs'>Stomach medicine</p>
                    </div>
                </div>
                
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex flex-row items-center justify-center'>
                    <div className='flex flex-col relative mx-2  items-center justify-center'>
                        <div className='bg-white p-2 w-24 h-24 md:w-16 md:h-16 rounded-full flex items-center justify-center'>
                            <Image src={bone} alt='brains' width={30} height={30}/>
                        </div>
                        <p className='my-4 text-center whitespace-nowrap text-xs'>Pain Killers</p>
                    </div>
                    <div className='flex flex-col relative mx-2  items-center justify-center'>
                        <div className='bg-white p-2 w-24 h-24 md:w-16 md:h-16 rounded-full flex items-center justify-center'>
                            <Image src={heart} alt='brains' width={30} height={30}/>
                        </div>
                        <p className='my-4 text-center whitespace-nowrap text-xs'>Blood pressure medicine </p>
                    </div>
                    <div className='flex flex-col relative mx-2  items-center justify-center'>
                        <div className='bg-white p-2 w-24 h-24 md:w-16 md:h-16 rounded-full flex items-center justify-center'>
                            <Image src={tooth} alt='brains' width={30} height={30}/>
                        </div>
                        <p className='my-4 text-center whitespace-nowrap text-xs'>Teeth Medicine</p>
                    </div>
                </div>
                
            </SwiperSlide>
        </Swiper>
        </div>
        {/* card */}
        <div className='lg:hidden md:grid-rows-2 md:grid-cols-3 lg:grid-cols-6 lg:grid-rows-1 grid grid-cols-2 gap-2 my-12 md:my-0 md:flex-row md:justify-evenly items-center '>
            {products.map((product) => (
                <SpecialityCard key={product.id} product={product}/>
            ))}
        </div>
       
       
    </div>
  )
}

export default SpecialityList