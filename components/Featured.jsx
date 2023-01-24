import Image from 'next/image'
import React from 'react'
import Help from './homepage/Help'
import Slider from './homepage/Slider'


const Featured = () => {
  return (
    <div className='w-full h-full'>
        <div className='md:mx-60  my-6 md:my-16 flex flex-col md:flex-row'>
            <div className='flex flex-col md:flex-row md:w-[60%] p-2'>
                <Help />
            </div>
            <div className='flex flex-col md:flex-row md:w-[40%] p-2'>
                <Slider />
            </div>

        </div>
    </div>
  )
}

export default Featured