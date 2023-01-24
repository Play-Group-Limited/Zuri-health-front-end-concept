import Image from 'next/image'
import React from 'react'
import logo from '../public/assets/logo.png'
import flag from '../public/assets/flags/england.png'
import { BsGlobe } from 'react-icons/bs'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { RxHamburgerMenu } from 'react-icons/rx'

const Navbar = () => {
  return (
    <div className='w-full h-full'>
        <div className='flex flex-col '>
            <div className='bg-black py-4 w-full h-full items-end'>
                <div className=' flex flex-row justify-end items-end mx-60'>
                    <p className='text-white mx-2 text-sm'>Corparate Services</p>
                    <p className='text-white mx-2 text-sm'>Become a Partner</p>
                    <span className='flex flex-row items-center'>
                        <p className='text-white mx-2 text-sm'>Country Selector</p>
                        <BsGlobe className='text-white' size={20}/>
                    </span>
                    <span className='flex flex-row items-center'>
                        <p className='text-white ml-4 mr-2 text-sm'>ENG</p>
                        <Image src={flag} alt='flag' />
                    </span>
                </div>
            </div>
            <div className='w-full py-4 flex flex-row items-center'>
                <div className='flex w-full items-center justify-between ite mx-60'>
                    <Image src={logo} alt="logo" />

                    <div className='flex flex-row'>
                        <div className='flex flex-row items-center mx-2'>
                            <p className='mx-2'>Engagae with doctors</p>
                            <RiArrowDropDownLine />
                        </div>
                        <div className='flex flex-row items-center mx-2'>
                            <p className='mx-2'>Lab Test & Diagnostics</p>
                            <RiArrowDropDownLine />
                        </div>
                        <div className='flex flex-row items-center mx-2'>
                            <p className='mx-2'>Pharmacy</p>
                            <RiArrowDropDownLine />
                        </div>
                    </div>

                    <RxHamburgerMenu size={40}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar