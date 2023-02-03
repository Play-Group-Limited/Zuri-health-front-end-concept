import Image from 'next/image'
import React from 'react'
import drug from '../../public/assets/stockImgs/Pharmacy/drug.png'

const DrugCard = ({product}) => {
  return (
    <div className='flex flex-col mx-4 min-w-[70vw] md:min-w-[12vw] md:w-[30vw]'>
        <div className='mb-4'>
            <Image src={drug} alt='med' className='object-fill w-full h-full'/>
        </div>
        <hr className='border-dotted border-2 w-full'/>
        <p className='text-center mt-4 font-light text-sm'>{product?.name}</p>
        <div className='mt-4 w-full flex items-center justify-center'>
            <p className='font-bold border-2 border-black text-center  w-[50%] rounded-lg '>
                KSH. {product?.price}.00
            </p>
        </div>
    </div>
  )
}

export default DrugCard