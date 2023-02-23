import Image from 'next/image'
import React from 'react'
import ccp from '../../public/assets/ccp/ccpsm.png'

const Featuredsm = () => {
  return (
    <div className='w-full max-w-[80vw] lg:max-w-[80vw] rounded-xl md:mx-12 my-4'>
        <div className='relative flex items-center justify-center'>
            <Image src={ccp} alt='ccp'  className='w-[300px] md:w-[500px] h-full object-cover'/>
            <div className='absolute w-full rounded-xl -bottom-[15%] p-6 bg-cyan-700/60'>
                <div className='flex flex-col justify-center h-full'>
                    <h1 className='lg:text-5xl text-2xl font-bold text-[#55F0F4] text-left'>Continuous Care <br /> Programme</h1>
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

export default Featuredsm