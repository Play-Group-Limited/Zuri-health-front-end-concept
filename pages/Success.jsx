import Image from 'next/image'
import React from 'react'

const Success = () => {
  return (
    <div className='w-full h-full flex items-center justify-center'>
        <div className='max-w-[1440px]'>
            <div className='flex flex-col items-center mt-8'>
                {/* <Image src */}
                <h1 className='lg:text-5xl font-bold'>Your Order Has Been Recived</h1>
                <p>A customer service representative in a short while to confirm your order</p>
            </div>
        </div>
    </div>
  )
}

export default Success