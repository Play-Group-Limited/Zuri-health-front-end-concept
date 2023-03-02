import Image from 'next/image'
import React from 'react'
import ccp from '../../public/assets/stockImgs/About/bglg.png'

const Featured = () => {
  return (
    <div className='w-full rounded-xl'>
        <div className='relative '>
            <Image src={ccp} alt='ccp' className='object-fill max-h-[30%] ' />
            <div className='absolute w-[50%] rounded-r-xl h-[40%] top-[40%] p-6 bg-[#051E3A]/80'>
                <div className='flex flex-col justify-center h-full'>
                    <h1 className='text-5xl font-bold text-white text-left'>About us</h1>
                    <p className='text-left text-white py-4'>
                        Take advantage of tailor-made
                        <br />
                        healthcare for your loved ones.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured