import Image from 'next/image'
import React from 'react'
import ccp from '../../public/assets/stockImgs/coporate/bg.png'

const Featured = () => {
  return (
    <div className='w-[60vw] rounded-xl'>
        <div className='relative '>
            <Image src={ccp} alt='ccp' className='' />
            <div className='absolute w-[50%] rounded-r-xl h-[50%] top-[40%] p-6 bg-black/60'>
                <div className='flex flex-col justify-center h-full'>
                    <h1 className='text-5xl font-bold text-[#FCB7AC] text-left'>Corporate <br /> Health CheckUp</h1>
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