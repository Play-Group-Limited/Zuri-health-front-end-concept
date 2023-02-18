import Image from 'next/image'
import React from 'react'
import Help from './homepage/Help'
import Slider from './homepage/Slider'


const Featured = () => {
  return (
    <div className='w-full h-full'>
      <div className='w-full flex items-center justify-center h-full'>
        <div className='lg:w-[75%] max-w-[1440px] grid grid-cols-1 md:grid-cols-7 h-[30%]'>
            <div className='flex flex-col md:flex-row col-span-4 md:max-w-[100%] p-2'>
                <Help />
            </div>
            <div className='flex flex-col md:flex-row col-span-3 md:w-[100%] '>
                <Slider />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Featured