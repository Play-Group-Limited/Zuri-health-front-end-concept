import Image from 'next/image'
import React from 'react'
import ccp from '../../public/assets/stockImgs/About/bgsm.png'

const Featuredsm = () => {
  return (
    <div className='flex w-full h-full rounded-xl'>
        <div className='relative '>
            <Image src={ccp} alt='ccp' className='w-full object-fill ' />
            <div className='absolute w-full md:w-[80%] rounded-xl md:rounded-r-xl h-fit top-[15%] p-6 bg-[#052749]/60'>
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