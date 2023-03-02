import Image from 'next/image'
import React from 'react'
import bgTwo from '../../public/assets/stockImgs/About/bgTwo.png'


const Values = () => {
  return (
    <div className='h-full  relative w-full flex items-center justify-center'>
        <Image src={bgTwo} alt='bg' className='w-full h-screen hidden lg:block text-sm object-full  '/>
        <div className='absolute max-w-[1440px] flex flex-col items-center'>
            <h2 className='text-white text-3xl font-bold'>What We Are About</h2>
            <div className='flex flex-col lg:flex-row  w-full items-center justify-center'>
                <div className='p-8 mx-4 bg-white border text-center w-[90%] lg:w-[60%] rounded-xl mt-6 flex flex-col items-center'>
                    <h3 className='text-2xl text-[#E9526F] uppercase font-bold'>Vision</h3>
                    <p className='mt-6 lg:max-w-[80%]'>
                        A healthier world where people are living longer, 
                        happier and healthier lives.

                        Where we anticipate and meet your health needs, 
                        not just in curing illnesses but in preventing them.
                        Where Zuri is at the forefront of making transformative
                        healthcare experiences universally accessible to all.
                    </p>
                </div>
                <div className='p-8 mx-4 bg-white border text-center w-[90%] lg:w-[40%] rounded-xl mt-6 flex flex-col items-center'>
                    <h3 className='text-2xl text-[#E9526F] uppercase font-bold'>MISSION</h3>
                    <p className='mt-6 ]'>
                        To provide the best universal health experience.
                    </p>
                </div>
                
            </div>  
        </div>
    </div>
  )
}

export default Values