import Image from 'next/image'
import React from 'react'
import Featured from '../components/About/Featured'
import Featuredsm from '../components/About/Featuredsm'

import vid from '../public/assets/stockImgs/About/video.png'

import AboutUs from '../components/About/AboutUs'
import Values from '../components/About/Values'
import Morals from '../components/About/Morals'
import Promises from '../components/About/Promises'
import Awards from '../components/About/Awards'

const About = () => {
  return (
    <div className='w-full h-full'>
        <div className=' py-14 '>
            <div className='bg-[#57A0DA] w-full h-[50vh] mb-12 flex relative items-center justify-center'>
                <div className='max-w-[1440px]  flex items-center justify-center '>
                    <div className='hidden md:block absolute top-6 max-h-[350px] max-w-[900px]'>
                        <Featured />
                    </div>
                    <div className=' md:hidden absolute top-2 max-h-[240px] max-w-[240px]'>
                        <Featuredsm />
                    </div>
                </div>
            </div>
        </div>

        <div className='h-full py-12 flex items-center justify-center'>
            <AboutUs />
        </div>
        {/* <div className='h-full w-full'>
            <Values />
        </div> */}
        <div className='h-full'>
            <Morals /> 
        </div>
        <div className='h-full'>
            <Promises />
        </div>
        
        <div className='flex flex-col items-center h-full justify-center mx-6 text-center'>
            <h2 className='text-[#1A4A96] text-3xl font-bold'>Watch Our Corporate Video</h2>
            <Image src={vid} alt='coporate video' className='mt-16' />
        </div>

        <Awards /> 
        
    </div>
  )
}

export default About