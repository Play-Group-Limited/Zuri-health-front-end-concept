import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

import test from '../../public/assets/stockImgs/categories/test/test.png'

const TestCard = ({product}) => {
  return (
    <div className='flex flex-col m-2 mb-8'>
        <Link href={`/Test/${product._id}`}>
            <div className='border border-black rounded-lg flex flex-col items-center justify-center relative'>
            { product.prescription == true ? 
                (<div className='bg-[#5BDADD] absolute top-0 left-0 w-full py-2 px-4 rounded-t-lg'>Requires Prescription</div>) 
            : null}
                <Image src={test} alt="test" className='object-contain max-w-[300px] my-2 '/>
            </div>
        </Link>
        <div className='flex flex-col border border-black rounded-lg my-2 p-4'>
            <h3 className='font-semibold'>{product.name}</h3>
            <p className='mt-2 text-sm'>Also known as Thyroid Profile Total Blood</p>
        </div>
        <div className='flex flex-row justify-evenly items-center'>
            <p className='whitespace-nowrap px-2'>KSH 2,503</p>
            <button className='p-2 bg-[#E9526F] rounded-lg w-[50%]'>
                <p className='text-white uppercase'>Add to Cart</p>
            </button>
        </div>
    </div>
  )
}

export default TestCard