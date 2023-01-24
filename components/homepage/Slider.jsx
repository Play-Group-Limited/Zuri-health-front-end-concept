import Image from 'next/image'
import React from 'react'
import woman from '../../public/assets/images/woman1.png'

const Slider = () => {
  return (
    <div className='rounded-3xl w-full h-full relative'>
        <Image src={woman} alt='woman' className='w-full h-full object-fill'/>
        <div className='absolute bottom-8 bg-blue-400/80 rounded-xl p-4 left-20 right-20 text-center py-12'>
            <h3 className='text-3xl font-bold text-white'>Join our Continuous Care Program</h3>
        </div>
    </div>
  )
}

export default Slider