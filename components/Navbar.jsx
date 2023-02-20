import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import logo from '../public/assets/logo.png'
import flag from '../public/assets/flags/england.png'
import { BsGlobe } from 'react-icons/bs'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { MdOutlineShoppingCart } from 'react-icons/md'
import { RxCrossCircled, RxHamburgerMenu } from 'react-icons/rx'
import Link from "next/link"
import { useRouter } from "next/router";
import Badge from '@mui/material/Badge';
import { useSelector } from 'react-redux'

import account from "../public/assets/icons/Navbar/account.png"
import wish from "../public/assets/icons/Navbar/wish.png"
import cartPic from "../public/assets/icons/Navbar/cart.png"

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false)
    const [openDrop, setOpenDrop] = useState(false)

    const router = useRouter();
  // console.log(router.route === item.name ? "page" : undefined)

    const cart = useSelector((state) => state.cart);

    useEffect(() => {
        const handleRouteChange = (url) => {
          console.log(`Route changed to: ${url}`);
          // Do something when the route changes
          setOpenMenu(false)
        };
    
        router.events.on('routeChangeComplete', handleRouteChange);
    
        return () => {
          router.events.off('routeChangeComplete', handleRouteChange);
        };
      }, [router.events]);
    
    

  return (
    <div className='w-full h-full'>
        
        <div className='flex flex-col w-full'>
            <div className='bg-black py-4 w-full h-full flex justify-center items-center pr-4 md:pr-0'>
                <div className=' flex flex-row justify-center md:justify-end md:items-end w-full max-w-[1440px] lg:pr-4'>
                    <p className='text-white mx-2 text-sm hidden md:block whitespace-nowrap'>Corparate Services</p>
                    <p className='text-white mx-2 text-sm hidden md:block whitespace-nowrap'>Become a Partner</p>
                    <span className='flex flex-row items-center'>
                        <p className='text-white mx-2 text-sm hidden lg:block whitespace-nowrap'>Country Selector</p>
                        <BsGlobe className='text-white mr-8 md:mr-0' size={20}/>
                    </span>
                    <span className='flex flex-row  items-center mx-8 md:hidden'>
                        <Image src={account} alt="account" className='mx-2  ' />
                        <Image src={wish} alt="WishList" className='mx-2 ' />
                        <Link href='/Cart'>
                            <Badge badgeContent={cart.quantity} color="warning">
                                <Image src={cartPic} alt="Cart" className='mx-2 ' />
                            </Badge>
                        </Link>
                    </span>
                    <span className='flex flex-row items-center'>
                        <p className='text-white ml-4 mr-2 text-sm'>ENG</p>
                        <Image src={flag} alt='flag' className='hidden md:block'/>
                    </span>
                    <span className='md:flex flex-row items-center ml-8 hidden pr-4'>
                        <Image src={account} alt="account" className='mx-2  ' />
                        <Image src={wish} alt="WishList" className='mx-2 ' />
                        <Link href='/Cart'>
                            <Badge badgeContent={cart.quantity} color="warning">
                                <Image src={cartPic} alt="Cart" className='mx-2 ' />
                            </Badge>
                        </Link>
                    </span>
                </div>
            </div>
            {openMenu ? (
                <div className=' w-full h-full top-0 bottom-0 overflow-y-auto left-0 right-0 z-50 md:h-screen bg-white'>
                    <div className=' mx-4 max-w-[1440px] my-12'>
                        <div className=''>
                            <hr className='my-8'/>
                            <div className='flex flex-row items-center justify-between'>
                                <Image src={logo} alt="logo" className='hidden md:block'/>
                                <RxCrossCircled size={40} onClick={() => setOpenMenu(false)} className='mr-4'/>
                            </div>
                            <hr className='my-8'/>
                        </div>

                        <div className='flex flex-col-reverse md:flex-row justify-between'>
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
                                        <p className='text-slate-600 my-2'>Choose a Country</p>
                                        <p className='text-slate-600 my-2'>Choose a Language</p>
                                    
                                    </div>
                                </div>
                                {/* item */}
                                <div className='flex flex-col'>
                                    {/* category */}
                                    <Link href='/Contacts'>
                                        <div className='flex flex-row items-center border-b-4  border-[#00F9ED]'>
                                            <p className='mx-2'>Contact us</p>
                                            <RiArrowDropDownLine />
                                            <span className='py-4 border-b border-[#00F9ED]'/>
                                        </div>
                                    </Link>
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
                                    <Link  href='/Labs'>
                                        <div className='flex flex-row items-center border-b-4  border-[#00F9ED]'>
                                            <p className='mx-2'>Lab Tests and Diagnostics</p>
                                            <RiArrowDropDownLine />
                                            <span className='py-4 border-b border-[#00F9ED]'/>
                                        </div>
                                    </Link>
                                    {/* list */}
                                    <div className='my-4 mx-2'>
                                        <Link href='/Labs'>
                                            <p className='text-slate-600 my-2'>Book a Lab test</p>
                                            <p className='text-slate-600 my-2'>Get Tested At Home</p>
                                            <p className='text-slate-600 my-2'>Get Vaccinated</p>
                                        </Link>
                                        <p className='text-slate-600 my-2'>Ask free health</p>
                                        <p className='text-slate-600 my-2'>Men Wellness Packages</p>
                                        <p className='text-slate-600 my-2'>Womens Wellness Packages</p>
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
                                        <p className='text-slate-600 my-2'>Chat With Vera</p>
                                        <p className='text-slate-600 my-2'>Talk to a CX Champion</p>
                                        <p className='text-slate-600 my-2'>Blog</p>
                                    
                                    </div>
                                </div>
                                
                            </div>
                            <div className='flex flex-col'>
                                {/* item */}
                                <Link href='/'>
                                    <p className='py-4 pl-2 md:hidden'>Back Home</p>
                                </Link>
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
                                        <p className='text-slate-600 my-2'>Order Medication</p>
                                        <p className='text-slate-600 my-2'>Upload Prescription</p>
                                        <Link href='/Categories'>
                                            <p className='text-slate-600 my-2'>Vitamins &amp; Supplements</p>
                                            <p className='text-slate-600 my-2'>Health &amp; Beauty</p>
                                            <p className='text-slate-600 my-2'>Personal Care</p>
                                            <p className='text-slate-600 my-2'>Hair Care</p>
                                            <p className='text-slate-600 my-2'>Eye Care</p>
                                            <p className='text-slate-600 my-2'>Mum &amp; Baby</p>
                                            <p className='text-slate-600 my-2'>Perfumes And Sprays</p>
                                            <p className='text-slate-600 my-2'>Medical Devices - Diagnostics</p>
                                        </Link>
                                        <p className='text-slate-600 my-2'>Read about medicines</p>
                                    </div>
                                </div>

                                {/* item */}
                                <div className='flex flex-col'>
                                    {/* category */}
                                    <Link href='/ContinuosCare' >
                                        <div className='flex flex-row items-center border-b-4  border-[#00F9ED]'>
                                            <p className='mx-2'>Care and technology</p>
                                            <RiArrowDropDownLine />
                                            <span className='py-4 border-b border-[#00F9ED]'/>
                                        </div>
                                    </Link>
                                    {/* list */}
                                    <div className='my-4 mx-2'>
                                        <Link href='/ContinuosCare' >
                                            <p className='text-slate-600 my-2'>Continuous Care Programme</p>
                                        </Link>
                                        <p className='text-slate-600 my-2'>Download our App</p>
                                        <Link href='/Partner'>
                                            <p className='text-slate-600 my-2'>Become a Partner</p>
                                        </Link>
                                    
                                    </div>
                                </div>

                                
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
            <div className='w-full py-4 flex flex-row items-center justify-center'>
                <div className='flex  w-full items-center justify-between mx-4 max-w-[1440px]'>
                    
                    <Link href='/'>
                        <Image src={logo} alt="logo" className='hidden lg:block object-scale-down'/>
                    </Link>

                    <div className='flex flex-row lg:hidden w-full h-full mt-8 justify-between'>
                        <Link href='/'>
                            <div className='items-start'> 
                                <Image src={logo} alt="logo" className='' width={80} height={40}/>
                            </div>
                        </Link>
                        <RxHamburgerMenu size={40} onClick={() => setOpenMenu(true)}/>
                    </div>

                    <div className='lg:flex flex-row hidden '>
                        <div onClick={() => setOpenMenu(true)} className='flex flex-row items-center mx-2'>
                            <p className='mx-2'>Engagae with doctors</p>
                            <RiArrowDropDownLine />
                        </div>
                        <div onClick={() => setOpenDrop(prev => !prev)} className='flex flex-row items-center mx-2'>
                            <p className='mx-2'>Lab Test & Diagnostics</p>
                            <RiArrowDropDownLine />

                            {/* {openLabs ? (
                                <div className='absolute w-full h-full'>

                                </div>
                            ) : null} */}
                        </div>
                        <Link href='/Pharmacy'>
                            <div  className='flex flex-row items-center mx-2'>
                                <p className='mx-2'>Pharmacy</p>
                                <RiArrowDropDownLine />
                            </div>
                        </Link>
                    </div>
 
                    <div onClick={() => setOpenMenu(true)} className='hidden lg:block'>
                        <RxHamburgerMenu size={40} />
                    </div>
                </div>
            </div>
            {openDrop ? (
                <div className='absolute right-[35%] top-[15%] w-fit p-4 bg-white border border-black rounded-lg'>
                    <h3 className='text-lg'>Pharmacy</h3>
                    <hr className='my-4'/>
                    <h3 className='text-lg'>Pharmacy</h3>
                    <hr className='my-4'/>
                    <h3 className='text-lg'>Pharmacy</h3>
                    <hr className='my-4'/>
                    <h3 className='text-lg'>Pharmacy</h3>
                </div>
            ) : null}
            
        </div>
    </div>
  )
}

export default Navbar