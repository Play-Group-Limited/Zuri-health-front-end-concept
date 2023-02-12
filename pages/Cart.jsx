import Image from 'next/image'
import React, { useState } from 'react'
import {BiTrash} from "react-icons/bi"
import { BsArrowRightShort } from 'react-icons/bs'
import {FiChevronDown} from "react-icons/fi"
import CartCard from '../components/Cart/CartCard'


const Cart = () => {

    const [openBasic, setOpenBasic] = useState(false)
    const [openDelivery, setOpenDelivery] = useState(false)
    const [openPrescription, setOpenPrescription] = useState(false)

  return (
    <div className='w-full h-full'>
        <div className='flex flex-col lg:mx-60 md:mx-20 md:w-auto  w-full'>
            <h2 className='font-semibold text-3xl uppercase my-8 text-center md:text-start'>Shopping Cart</h2>

            <div className='flex flex-col mx-4 md:mx-0'>
                <div className='md:flex flex-row items-center justify-between mb-4 hidden'>
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

                <div className='flex flex-col md:flex-row w-full justify-between'>
                    {/* left */}
                    <div className='flex flex-col w-full md:w-[60%] mr-16'>
                        <div className='flex flex-col md:flex-row items-center justify-between mt-8'>
                            <div className='flex flex-row'>
                                <p className='md:text-xl font-bold '>Your Order Summary: </p>
                                <p className='md:text-xl font-bold text-gray-500 ml-2'>3 items</p>
                            </div>

                            <div className='flex flex-row items-center'>
                                <BiTrash size={20}/>
                                <p className='text-lg font-semibold ml-4'>Clear Cart</p>
                            </div>
                        </div>
                        <hr className='my-4 border-black'/>

                        <CartCard />
                        <CartCard />
                        <CartCard />

                        <div className='w-full flex flex-row justify-end items-end'>
                            <div className='flex flex-row items-center'>
                                <p className='mr-2'>Not ready to checkout?</p>
                                <button className='p-2 cursor-pointer border border-black'>
                                    <p>Continue shopping here</p>
                                </button>
                            </div>
                        </div>

                        <div className='p-4 my-12  bg-[#5BDADD] flex flex-row justify-between rounded-md'>
                            <h2 className='uppercase font-bold text-xl'>Sub total</h2>
                            <p className='uppercase font-bold text-xl'> KES 14,095</p>
                        </div>
                    </div>

                    {/* right */}
                    <div className='md:w-[40%] my-20 border-t py-20 md:py-0 md:border-t-0 md:border-l border-black'>
                        <div className='flex flex-col items-center w-full'>
                            <div  className='px-8 py-4 md:w-[80%] border border-black bg-gray-200 flex flex-col rounded-lg '>
                                <div onClick={() => setOpenBasic(prev => !prev)} className='flex flex-row justify-between'>
                                    <div className='flex flex-col mr-16'>
                                        <h3 className='font-bold text-xl'>Basic Infomation</h3>
                                        <p className='text-xs'>please fill in the basic information</p>
                                    </div>

                                    <FiChevronDown size={40}/>
                                </div>

                                { openBasic ? (
                                    <div className='mt-6'>
                                        <input type="text" placeholder="Name" className='bg-white p-4 my-4  w-full rounded-lg border border-black'/>
                                        <input type="text" placeholder="Contact Number" className='bg-white p-4 my-4  w-full rounded-lg border border-black'/>
                                        <input type="text" placeholder="Email Address" className='bg-white p-4 my-4  w-full rounded-lg border border-black'/>
                                    </div>
                                ) : null}
                            </div>

                            <div  className='px-8 my-8 py-4 md:w-[80%] border border-black bg-gray-200 flex flex-col rounded-lg '>
                                <div onClick={() => setOpenDelivery(prev => !prev)} className='flex flex-row justify-between'>
                                    <div className='flex flex-col mr-16'>
                                        <h3 className='font-bold text-xl'>Delivery Address</h3>
                                        <p className='text-xs'>Please enter the address you would like us to deliver to</p>
                                    </div>

                                    <FiChevronDown size={40}/>
                                </div>

                                { openDelivery ? (
                                    <div className='mt-6'>
                                        <input type="text" placeholder="Address" className='bg-white p-4 my-4  w-full rounded-lg border border-black'/>
                                        <input type="text" placeholder="House no / Flat no" className='bg-white p-4 my-4  w-full rounded-lg border border-black'/>
                                        <input type="text" placeholder="City / Town" className='bg-white p-4 my-4  w-full rounded-lg border border-black'/>
                                        <input type="text" placeholder="State / County" className='bg-white p-4 my-4  w-full rounded-lg border border-black'/>
                                    </div>
                                ) : null}
                            </div>

                            <div  className='px-8 py-4 md:w-[80%] border border-black bg-gray-200 flex flex-col rounded-lg '>
                                <div onClick={() => setOpenPrescription(prev => !prev)} className='flex flex-row justify-between'>
                                    <div className='flex flex-col mr-16'>
                                        <h3 className='font-bold text-xl'>Upload Prescription</h3>
                                        <p className='text-xs'>Some items on this order require a Doctor&apos;s prescription</p>
                                    </div>

                                    <FiChevronDown size={40}/>
                                </div>

                                { openPrescription ? (
                                    <div className='mt-6'>
                                        <input type="file"  className='bg-white p-4 my-4  w-full rounded-lg border border-black'/>
                                    </div>
                                ) : null}
                            </div>
                        </div>

                        <button className='px-8 py-2 flex flex-row justify-between items-center bg-red-400 my-8 md:mx-16'>
                            <p className='uppercase text-white'>Place order now</p>
                            <BsArrowRightShort size={30} className='ml-8 text-white'/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cart