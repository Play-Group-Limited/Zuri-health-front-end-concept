import Image from 'next/image'
import React from 'react'
import drug from '../../public/assets/stockImgs/Pharmacy/drug.png'

const DrugCard = ({product}) => {
  console.log("t", product)
  return (
    <div className='flex flex-col mx-4 w-[30vw]'>
        <div className='mb-4'>
            <Image src={drug} alt='med' />
        </div>
        <hr className='border-dotted border-2 w-[10vw]'/>
        <p className='text-center mt-4 font-light text-sm'>{product?.name}</p>
        <div className='mt-4 border-2 border-black text-center rounded-lg p-2 w-auto items-center justify-center'>
            <p className='font-bold '>
                KSH. {product?.price}
            </p>
        </div>
    </div>
  )
}

export default DrugCard