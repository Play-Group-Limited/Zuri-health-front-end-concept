import React from 'react'
import onep from '../../public/assets/stockImgs/About/one.png'
import twop from '../../public/assets/stockImgs/About/two.png'
import threep from '../../public/assets/stockImgs/About/three.png'
import Image from 'next/image'

const Promises = () => {
  return (
    <div className='flex flex-col md items-center justify-center h-full  mx-2'>
        <h3 className='text-3xl text-[#1865A5] font-bold'>Our Promise</h3>
        <div className='flex flex-col md:flex-row w-full items-center justify-center mt-8'>
            <div className='p-8 text-center rounded-xl mt-4 flex flex-col items-center'>
                <div className='flex flex-col'>
                    <div className='p-4 border border-[#1865A5] mt-8 mb-4 rounded-full'>
                        <Image src={onep} alt='hope' className='w-full h-full'/>
                    </div>
                </div>
                <h4 className='font-bold text-xl whitespace-nowrap'>
                    Best price guarantee
                </h4>
                <p className='text-gray-400 mt-4'>
                    We guarantee the lowest price. 
                    <br />
                    Find any better deals and we&apos;ll refund the difference.
                </p>
            </div>
            <div className='p-8 text-center rounded-xl mt-4 flex flex-col items-center'>
                <div className='flex flex-col'>
                    <div className='p-4 border border-[#1865A5] mt-8 mb-4 rounded-full'>
                        <Image src={twop} alt='hope' className='w-full h-full' />
                    </div>
                </div>
                <h4 className='font-bold text-xl'>
                    Certified healthcare services
                </h4>
                <p className='text-gray-400 mt-4'>
                    All our medical service providers Are verified <br /> To ensure they are licenced providers.
                </p>
            </div>
            <div className='p-8 text-center rounded-xl mt-4 flex flex-col items-center'>
                <div className='flex flex-col'>
                    <div className='p-4 border border-[#1865A5] mt-8 mb-4 rounded-full'>
                        <Image src={threep} alt='hope' className='w-full h-full'/>
                    </div>
                </div>
                <h4 className='font-bold text-xl whitespace-nowrap'>
                    Seamless booking
                </h4>
                <p className='text-gray-400 mt-4'>
                    An intuitive web and mobile experience to ensure
                    <br />
                    a seamless and secure booking experience always.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Promises