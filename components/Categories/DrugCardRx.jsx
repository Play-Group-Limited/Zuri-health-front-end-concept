import Image from 'next/image'
import React, { useState } from 'react'

import drug from "../../public/assets/stockImgs/categories/drug.png"


const DrugCardRx = () => {

    const [prescription, setPrescription] = useState(true)
    
  return (
    <div className='flex flex-col'>
        <div className='border border-black rounded-lg flex flex-col items-center justify-center'>
            { prescription ? <div className='bg-[#5BDADD] w-full py-2 px-4 rounded-t-lg'>Requires Prescription</div> : null}
            <Image src={drug} alt="drug" className='object-contain my-2'/>
        </div>
        <div className='flex flex-col border border-black rounded-lg my-2 p-4'>
            <h3 className='font-semibold'>ZINCOVIT TABLET 15's</h3>
            <p className='mt-2 text-sm'>Also known as Thyroid Profile Total Blood</p>
        </div>
        <div className='flex flex-row justify-evenly items-center'>
            <p className='whitespace-nowrap px-2'>KSH 2,503</p>
            <button className='p-2 bg-[#E9526F] rounded-lg w-[50%]'>
                <p className='text-white '>Add to Cart</p>
            </button>
        </div>
    </div>
  )
}

export default DrugCardRx