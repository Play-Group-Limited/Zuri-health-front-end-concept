import Image from 'next/image'
import React from 'react'
import Services from '../components/homepage/Services'

const Success = () => {
  return (
    <div className='w-full h-full flex items-center justify-center'>
        <div className='max-w-[1440px] my-8 mx-4'>
            <div className='flex flex-col items-center my-8 text-center'>
                {/* <Image src */}
                <h1 className='text-5xl font-bold '>Your Order Has Been Recived</h1>
                <p className='my-4'>A customer service representative in a short while to confirm your order</p>
            <p className='mt-8 text-xl underline font-semibold'>Try out some of our other services</p>
            </div>
            <Services />
        </div>
    </div>
  )
}

export default Success