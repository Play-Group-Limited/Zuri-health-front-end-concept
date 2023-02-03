import Image from 'next/image'
import React, { useState } from 'react'
import logo from '../public/assets/logo.png'
import flag from '../public/assets/flags/england.png'
import { BsGlobe } from 'react-icons/bs'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { RxCrossCircled, RxHamburgerMenu } from 'react-icons/rx'
import Link from "next/link"

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false)

  return (
    <div className='w-full h-full'>
        
        <div className='flex flex-col '>
            <div className='bg-black py-4 w-full h-full items-end'>
                <div className=' flex flex-row justify-center md:justify-end md:items-end md:mx-60'>
                    <p className='text-white mx-2 text-sm hidden md:block'>Corparate Services</p>
                    <p className='text-white mx-2 text-sm hidden md:block'>Become a Partner</p>
                    <span className='flex flex-row items-center'>
                        <p className='text-white mx-2 text-sm'>Country Selector</p>
                        <BsGlobe className='text-white' size={20}/>
                    </span>
                    <span className='flex flex-row items-center'>
                        <p className='text-white ml-4 mr-2 text-sm'>ENG</p>
                        <Image src={flag} alt='flag' />
                    </span>
                    <span className='flex flex-row items-center'>
                        
                    </span>
                </div>
            </div>
            {openMenu ? (
                <div className='w-full h-full top-0 bottom-0 overflow-y-auto left-0 right-0 z-50 md:h-screen bg-white'>
                    <div className=' mx-4 md:mx-60 my-12'>
                        <div className=''>
                            <hr className='my-8'/>
                            <div className='flex flex-row items-center justify-between'>
                                <Image src={logo} alt="logo" className='hidden md:block'/>
                                <RxCrossCircled size={40} onClick={() => setOpenMenu(false)} className='mr-4'/>
                            </div>
                            <hr className='my-8'/>
                        </div>

                        <div className='flex flex-col md:flex-row justify-between'>
                            <div className='flex flex-col'>
                                {/* item */}
                                <div className='flex flex-col'>
                                    {/* category */}
                                    <div className='flex flex-row items-center border-b-4  border-[#00F9ED]'>
                                        <p className='mx-2'>Engage with doctors</p>
                                        <RiArrowDropDownLine />
                                        <span className='py-4 border-b border-[#00F9ED]'/>
                                    </div>
                                    {/* list */}
                                    <div className='my-4 mx-2'>
                                        <p className='text-slate-600 my-2'>Find a doctor</p>
                                        <p className='text-slate-600 my-2'>Video Consultation</p>
                                        <p className='text-slate-600 my-2'>Book a home vist</p>
                                        <p className='text-slate-600 my-2'>Ask free health</p>
                                        <p className='text-slate-600 my-2'>Read health articles</p>
                                        <p className='text-slate-600 my-2'>Chat with a doctor</p>
                                    </div>
                                </div>

                                {/* item */}
                                <div className='flex flex-col'>
                                    {/* category */}
                                    <div className='flex flex-row items-center border-b-4  border-[#00F9ED]'>
                                        <p className='mx-2'>Countries and settings</p>
                                        <RiArrowDropDownLine />
                                        <span className='py-4 border-b border-[#00F9ED]'/>
                                    </div>
                                    {/* list */}
                                    <div className='my-4 mx-2'>
                                        <p className='text-slate-600 my-2'>Find a doctor</p>
                                        <p className='text-slate-600 my-2'>Video Consultation</p>
                                    
                                    </div>
                                </div>
                                {/* item */}
                                <div className='flex flex-col'>
                                    {/* category */}
                                    <div className='flex flex-row items-center border-b-4  border-[#00F9ED]'>
                                        <p className='mx-2'>Contact us</p>
                                        <RiArrowDropDownLine />
                                        <span className='py-4 border-b border-[#00F9ED]'/>
                                    </div>
                                    {/* list */}
                                    <div className='my-4 mx-2'>
                                        {/* <p className='text-slate-600 my-2'>Find a doctor</p>
                                        <p className='text-slate-600 my-2'>Video Consultation</p> */}
                                    
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                {/* item */}
                                <div className='flex flex-col'>
                                    {/* category */}
                                    <div className='flex flex-row items-center border-b-4  border-[#00F9ED]'>
                                        <p className='mx-2'>Lab Tests and Diagnostics</p>
                                        <RiArrowDropDownLine />
                                        <span className='py-4 border-b border-[#00F9ED]'/>
                                    </div>
                                    {/* list */}
                                    <div className='my-4 mx-2'>
                                        <p className='text-slate-600 my-2'>Find a doctor</p>
                                        <p className='text-slate-600 my-2'>Video Consultation</p>
                                        <p className='text-slate-600 my-2'>Book a home vist</p>
                                        <p className='text-slate-600 my-2'>Ask free health</p>
                                        <p className='text-slate-600 my-2'>Read health articles</p>
                                        <p className='text-slate-600 my-2'>Chat with a doctor</p>
                                    </div>
                                </div>

                                {/* item */}
                                <div className='flex flex-col'>
                                    {/* category */}
                                    <div className='flex flex-row items-center border-b-4  border-[#00F9ED]'>
                                        <p className='mx-2'>Get Assistance</p>
                                        <RiArrowDropDownLine />
                                        <span className='py-4 border-b border-[#00F9ED]'/>
                                    </div>
                                    {/* list */}
                                    <div className='my-4 mx-2'>
                                        <p className='text-slate-600 my-2'>Find a doctor</p>
                                        <p className='text-slate-600 my-2'>Video Consultation</p>
                                    
                                    </div>
                                </div>
                                
                            </div>
                            <div className='flex flex-col'>
                                {/* item */}
                                <div className='flex flex-col'>
                                    {/* category */}
                                    <Link href="/Pharmacy">
                                        <div className='flex flex-row items-center border-b-4  border-[#00F9ED]'>
                                            <p className='mx-2'>Pharmacy</p>
                                            <RiArrowDropDownLine />
                                            <span className='py-4 border-b border-[#00F9ED]'/>
                                        </div>
                                    </Link>
                                    {/* list */}
                                    <div className='my-4 mx-2'>
                                        <p className='text-slate-600 my-2'>Find a doctor</p>
                                        <p className='text-slate-600 my-2'>Video Consultation</p>
                                        <p className='text-slate-600 my-2'>Book a home vist</p>
                                        <p className='text-slate-600 my-2'>Ask free health</p>
                                        <p className='text-slate-600 my-2'>Read health articles</p>
                                        <p className='text-slate-600 my-2'>Chat with a doctor</p>
                                        <p className='text-slate-600 my-2'>Ask free health</p>
                                        <p className='text-slate-600 my-2'>Read health articles</p>
                                        <p className='text-slate-600 my-2'>Chat with a doctor</p>
                                    </div>
                                </div>

                                {/* item */}
                                <div className='flex flex-col'>
                                    {/* category */}
                                    <div className='flex flex-row items-center border-b-4  border-[#00F9ED]'>
                                        <p className='mx-2'>Care and technology</p>
                                        <RiArrowDropDownLine />
                                        <span className='py-4 border-b border-[#00F9ED]'/>
                                    </div>
                                    {/* list */}
                                    <div className='my-4 mx-2'>
                                        <p className='text-slate-600 my-2'>Find a doctor</p>
                                        <p className='text-slate-600 my-2'>Video Consultation</p>
                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
            <div className='w-full py-4 flex flex-row items-center'>
                <div className='flex  w-full items-center justify-between mx-4 md:mx-60'>
                    
                    <Image src={logo} alt="logo" className='hidden md:block'/>

                    <div className='flex flex-row md:hidden w-full h-full mt-8 justify-between'>
                        <div className='items-start'> 
                            <Image src={logo} alt="logo" className='' width={80} height={40}/>
                        </div>
                        <RxHamburgerMenu size={40} onClick={() => setOpenMenu(true)}/>
                    </div>

                    <div className='md:flex flex-row hidden '>
                        <div onClick={() => setOpenMenu(true)} className='flex flex-row items-center mx-2'>
                            <p className='mx-2'>Engagae with doctors</p>
                            <RiArrowDropDownLine />
                        </div>
                        <div onClick={() => setOpenMenu(true)} className='flex flex-row items-center mx-2'>
                            <p className='mx-2'>Lab Test & Diagnostics</p>
                            <RiArrowDropDownLine />
                        </div>
                        <div onClick={() => setOpenMenu(true)} className='flex flex-row items-center mx-2'>
                            <p className='mx-2'>Pharmacy</p>
                            <RiArrowDropDownLine />
                        </div>
                    </div>
                    
                    <div className='hidden md:block'>
                        <RxHamburgerMenu size={40}/>
                    </div>
                </div>
            </div>

            
        </div>
    </div>
  )
}

export default Navbar