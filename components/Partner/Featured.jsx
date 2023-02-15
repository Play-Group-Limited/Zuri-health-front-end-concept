import Image from 'next/image'
import React from 'react'
import ccp from '../../public/assets/stockImgs/Partner/bg.png'

const Featured = () => {
  return (
    <div className='w-[60vw] rounded-xl'>
        <div className='relative '>
            <Image src={ccp} alt='ccp' className='w-full' />
            <div className='absolute w-[50%] rounded-r-xl h-[50%] top-[25%] p-6 bg-[#052749]/60'>
                <div className='flex flex-col justify-center h-full'>
                    <h1 className='md:text-5xl text-base font-bold text-white text-left'>Become a Happy <br /> Zuri Partner</h1>
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