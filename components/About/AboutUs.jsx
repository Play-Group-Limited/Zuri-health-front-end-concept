import Image from 'next/image'
import React from 'react'
import team from '../../public/assets/stockImgs/About/team.png'


const AboutUs = () => {
  return (
    <div className='w-full h-full px-4 flex items-center justify-center'>
        <div className='flex  flex-col md:flex-row items-center justify-between  max-w-[1440px]'>
            <Image src={team} alt="team" className='w-full md:max-w-[50vw] '/>
            
            <div className='md:ml-6 mt-4 md:mt-0 lg:max-w-[60vw]'>
                <h3 className='font-bold text-[#E9526F] my-4  text-3xl'>
                    Providing affordable and accessible healthcare solutions is at the heart of Zuri Health..
                </h3>
                <p className='mt-4 md:mt-0 text-gray-500'>
                    Founded in February 2020, our journey started with a vision. 
                    A vision for quality, affordable and on-demand healthcare for all with a
                    simple swipe. We are creating an all-inclusive service that caters for 
                    all individuals with a mobile device, regardless of their location,
                    health history and social status.
                </p>
            </div>
        </div>

    </div>
  )
}

export default AboutUs