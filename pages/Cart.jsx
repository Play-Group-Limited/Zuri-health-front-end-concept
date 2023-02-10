import Image from 'next/image'
import React from 'react'
import {BiTrash} from "react-icons/bi"

const Cart = () => {
  return (
    <div className='w-full h-full'>
        <div className='flex flex-col lg:mx-60 md:mx-20 mx-4'>
            <h2 className='font-semibold text-3xl uppercase mb-8'>Shopping Cart</h2>

            <div className='flex flex-col'>
                <div className='flex flex-row items-center justify-between mb-4'>
                    <div className='flex flex-row'>
                        <div className='w-8 h-8 rounded-full bg-[#5BDADD] mr-4 flex justify-center items-center '>
                            <p className='text-xl '>1</p>
                        </div>
                        <p className='text-xl font-bold'>Confirm your order</p>
                    </div>
                    <div className='flex flex-row'>
                        <div className='w-8 h-8 rounded-full bg-[#5BDADD] mr-4 flex justify-center items-center '>
                            <p className='text-xl '>2</p>
                        </div>
                        <p className='text-xl font-bold'>Confirm your details</p>
                    </div>
                </div>

                {/* left */}
                <div className='flex flex-col'>
                    <div className='flex flex-row items-center justify-between mt-8'>
                        <div className='flex flex-row'>
                            <p className='text-xl font-bold '>Your Order Summary: </p>
                            <p className='text-xl font-bold text-gray-500 ml-2'>3 items</p>
                        </div>

                        <div className='flex flex-row items-center'>
                            <BiTrash size={20}/>
                            <p className='text-lg font-semibold ml-4'>Clear Cart</p>
                        </div>
                    </div>
                    <hr className='my-4 border-black'/>

                    <div className='flex flex-row p-8 border border-black rounded-lg '>
                        <Image src={drug} alt='medd'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cart