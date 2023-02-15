import Image from 'next/image'
import React from 'react'
import ccp from '../../public/assets/stockImgs/coporate/bgsm.png'

const FeaturedSm = () => {
  return (
    <div className='flex w-full h-full rounded-xl'>
        <div className='relative '>
            <Image src={ccp} alt='ccp' className='w-full h-full object-contain' />
            <div className='absolute w-[80%] rounded-r-xl h-[70%] top-[25%] p-6 bg-black/60'>
                <div className='flex flex-col justify-center h-full'>
                    <h1 className='md:text-5xl text-lg font-bold text-white text-left'>Become a Happy <br /> Zuri Partner</h1>
                    <p className='text-left text-white py-4 text-sm'>
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

export default FeaturedSm