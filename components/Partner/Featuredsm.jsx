import Image from 'next/image'
import React from 'react'
import ccp from '../../public/assets/stockImgs/Partner/bgsm.png'

const Featuredsm = () => {
  return (
    <div className='w-full max-w-[80vw] lg:max-w-[80vw] rounded-xl md:mx-12 my-4'>
        <div className='relative '>
            <Image src={ccp} alt='ccp' className='w-full h-full object-contain' />
            <div className='absolute w-[80%] rounded-r-xl h-[70%] top-[25%] p-6 bg-[#052749]/60'>
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

export default Featuredsm