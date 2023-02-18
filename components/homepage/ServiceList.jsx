import Image from 'next/image'
import React from 'react'
import product from '../../public/assets/product/man.png'
import ServiceCard from './ServiceCard'
import one from '../../public/assets/product/man.png'
import two from '../../public/assets/product/1.png'
import three from '../../public/assets/product/2.png'
import four from '../../public/assets/product/3.png'
import five from '../../public/assets/product/4.png'

const ServiceList = ({ }) => {

  const products = [
    {
        id: 1,
        img: '/assets/product/man.png',
        text: 'Engage with a doctor',
        link: '/Doctors'

    },
    {
        id: 2,
        img: '/assets/product/1.png',
        text: 'Order Medicine',
        link: '/ContinousCare'

    },
    {
        id: 3,
        img: '/assets/product/2.png',
        text: 'Lab Tests & diagnostics',
        link: '/ContinousCare'

    },
    {
        id: 4,
        img: '/assets/product/3.png',
        text: 'Wellness and more',
        link: '/ContinousCare'

    },
    {
        id: 5,
        img: '/assets/product/4.png',
        text: 'Continuos Care Program',
        link: '/ContinuosCare'

    }
  ]

  return (
      <div className='w-full h-full max-w-[1440px]'>
        <div className='flex flex-col md:flex-row items-center justify-center'>
          <div className='w-full h-full rounded-3xl p-4 py-6 relative flex  items-center justify-center'>
              <Image src={one} alt='' className='w-[300px] h-full object-contain' />
              <div className='absolute bottom-16 md:bottom-10 left-[30%] right-[30%] items-center justify-center text-center'>
                  <p className='font-bold text-white text-lg leading-4'>Engage with a doctor</p>
              </div>
          </div>
          <div className='w-full h-full rounded-3xl p-4 py-6 relative flex  items-center justify-center'>
              <Image src={two} alt='' className='w-[300px] h-full object-contain' />
              <div className='absolute bottom-16 md:bottom-10 left-[30%] right-[30%] items-center justify-center text-center'>
                  <p className='font-bold text-white text-lg leading-4'>Order Medicine</p>
              </div>
          </div>
          <div className='w-full h-full rounded-3xl p-4 py-6 relative flex  items-center justify-center'>
              <Image src={three} alt='' className='w-[300px] h-full object-contain' />
              <div className='absolute bottom-16 md:bottom-10 left-[30%] right-[30%] items-center justify-center text-center'>
                  <p className='font-bold text-white text-lg leading-4'>Lab Tests &amp; diagnostics</p>
              </div>
          </div>
          <div className='w-full h-full rounded-3xl p-4 py-6 relative flex  items-center justify-center'>
              <Image src={four} alt='' className='w-[300px] h-full object-contain' />
              <div className='absolute bottom-16 md:bottom-10 left-[30%] right-[30%] items-center justify-center text-center'>
                  <p className='font-bold text-white text-lg leading-4'>Wellness and more</p>
              </div>
          </div>
          <div className='w-full h-full rounded-3xl p-4 py-6 relative flex  items-center justify-center'>
              <Image src={five} alt='' className='w-[300px] h-full object-contain' />
              <div className='absolute bottom-16 md:bottom-10 left-[30%] right-[30%] items-center justify-center text-center'>
                  <p className='font-bold text-white text-lg leading-4'>Continuos Care Program</p>
              </div>
          </div>
        </div>
        
        
    </div>
  )
}

export default ServiceList