import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsArrowRightShort } from 'react-icons/bs'
import logo from '../public/assets/icons/FooterLogo.svg'

const Footer = () => {
  return (
    <div className='w-full h-full flex items-center justify-center'>
      <div className='bg-black w-full border-t-2 border-[#00F9ED]  flex items-center justify-center'>
        <div className='max-w-[1440px]  w-full my-12 md flex flex-col md:flex-row text-white items-center md:items-start justify-evenly'>
          <div className=''>
            <Image src={logo} alt='logo' />
          </div>
          <div className='h-full flex flex-col my-2 pb-8 items-center justify-between md:hidden'>
            <div className='flex flex-col items-center justify-between'>
              <h3 className='text-[#00F9ED] my-4'>Join our community</h3>
              <Link href='mailto:support@zuri.health'>
                <button className='w-full rounded-full bg-white p-4 flex flex-row items-center justify-between  min-w-[240px]'>
                  <p className='text-black'>Email</p>
                  <BsArrowRightShort className='text-black'/>
                </button>
              </Link>
            </div>

            
          </div>  
          <div className='flex flex-col text-center md:text-start pb-8'>
            <p className='text-sm pb-2'>Find A Doctor</p>
            <p className='text-sm py-2'>Video Consultation</p>
            <p className='text-sm py-2'>Book a Lab test</p>
            <p className='text-sm py-2'>Order medicine</p>
            <p className='text-sm py-2'>Ask free health questions</p>
            <p className='text-sm py-2'>Search for doctors</p>
            <p className='text-sm py-2'>Search for clinics</p>
            <p className='text-sm py-2'>Read health articles</p>
            <p className='text-sm py-2'>Read about medicines</p>
            <p className='text-sm py-2'>Consult a doctor</p>
            <p className='text-sm py-2'>Health app</p>
          </div>
          <div className='flex flex-col text-center md:text-start pb-8'>
            <p className='text-sm pb-2'>About Us</p>
            <p className='text-sm py-2'>Corporate Services</p>
            <p className='text-sm py-2'>Wellness Packages</p>
            <p className='text-sm py-2'>Continuous care Programme</p>
            <p className='text-sm py-2'>Blog</p>
            <p className='text-sm py-2'>Careers</p>
            <p className='text-sm py-2'>Press</p>
            <p className='text-sm py-2'>Contact Us</p>
          </div>
          <div className='flex flex-col text-center md:text-start pb-8'>
            <p className='text-sm pb-2'>Facebook</p>
            <p className='text-sm py-2'>Twitter</p>
            <p className='text-sm py-2'>LinkedIn</p>
            <p className='text-sm py-2'>Youtube</p>
            <p className='text-sm py-2'>Tiktok</p>
          </div>
          <p className='text-sm pt-12 md:hidden'>(C) 2023 Zuri Health</p>
          <div className='h-full md:flex flex-col items-center justify-center hidden'>
            <div className='flex flex-col items-center justify-between'>
              <h3 className='text-[#00F9ED] mb-4'>Join our community</h3>
              <Link href='mailto:support@zuri.health'>
                <button className='w-full rounded-full bg-white p-4 flex flex-row items-center justify-between md:min-w-[40px] lg:min-w-[270px]'>
                  <p className='text-black'>Email</p>
                  <BsArrowRightShort size={20} className='text-black'/>
                </button>
              </Link>
            </div>

            <p className='pt-12 text-sm'>(C) 2023 Zuri Health</p>
          </div>  

        </div>
      </div>
    </div>
  )
}

export default Footer