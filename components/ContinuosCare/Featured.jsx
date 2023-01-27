import Image from 'next/image'
import React from 'react'
import ccp from '../../public/assets/ccp/ccp.png'

const Featured = () => {
  return (
    <div className='w-[60vw] rounded-xl'>
        <div className='relative'>
            <Image src={ccp} alt='ccp' />
            <div className='absolute w-[50%] rounded-r-xl h-[50%] top-[25%] p-6 bg-cyan-700/60'>
                <div className='flex flex-col justify-center h-full'>
                    <h1 className='text-5xl font-bold text-[#55F0F4] text-left'>Continuous Care <br /> Programme</h1>
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