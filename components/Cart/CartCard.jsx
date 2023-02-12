import Image from 'next/image'
import React from 'react'
import { BiTrash } from 'react-icons/bi'

import drug from "../../public/assets/stockImgs/Pharmacy/drugs/drug.png"


const CartCard = () => {
  return (
    <div className='flex flex-col md:flex-row p-8 border my-6 border-black rounded-lg justify-between'>
        <div className='flex flex-col md:flex-row text-center md:text-left'>
            <div className='mx-2 md:max-w-[200px] my-4 md:my-0 rounded-lg flex justify-center items-center'>
                <Image src={drug} alt='medd'/>
            </div>
            <div className='flex flex-col md:ml-4 justify-between'>
                <div className='flex flex-col'>
                    <p className='font-bold text-[#5BDADD] uppercase mb-4'>Requires prescription</p>
                    <p className='font-bold my-2 md:my-0'>ZINCOVIT TABLET Covid_essentials 15`S</p>
                    <p className='uppercase text-gray-400 mb-4 md:mb-0 my-2 md:my-0'>Apex laboritories PVT LTD</p>
                </div>
                <div className='flex flex-col md:flex-row md:items-stat md:justify-start items-center justify-center my-6 md:my-0'>
                    <div className='flex flex-row border rounded-md'>
                        <p className='px-2'>-</p>
                        <p className='px-4 bg-black text-white'>1</p>
                        <p className='px-2'>+</p>
                    </div>

                    <div className='flex flex-row items-center my-4 md:my-0 md:ml-4'>
                        <BiTrash size={20}/>
                        <p className='ml-4'>Remove</p>
                    </div>
                </div>
            </div>
        </div>
        <p className='font-bold uppercase text-2xl text-center md:text-start'> KES 1,505 </p>
    </div>
  )
}

export default CartCard