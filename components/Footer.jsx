import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { BsArrowRightShort } from 'react-icons/bs'
import { toast } from 'react-toastify'
import logo from '../public/assets/icons/FooterLogo.svg'

const Footer = () => {
  const [email, setEmail] = useState('')
  const handleClick = (e) => {
    e.preventDefault()
    toast.success("Thank you for joining our newsletter")
  }
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
              <form onSubmit={(e) => handleClick(e)}>
                <div className='rounded-full bg-white p-4 flex flex-row items-center justify-between  min-w-[240px]'>
                  <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email' className='w-full h-full focus:outline-none text-black' />
                  <button type='submit' className=''>
                    <BsArrowRightShort className='text-black'/>
                  </button>
                </div>
              </form>
            </div>

            
          </div>  
          <div className='flex flex-col text-center md:text-start pb-8'>
            <Link href='/Doctors'>
              <p className='text-sm pb-2'>Find A Doctor</p>
              <p className='text-sm py-2'>Video Consultation</p>
            </Link>
            <Link href='/Labs'>
              <p className='text-sm py-2'>Book a Lab test</p>
            </Link>
            <Link href='/Pharmacy'>
              <p className='text-sm py-2'>Order medicine</p>
            </Link>
            <Link href='https://api.whatsapp.com/send/?phone=254756551551&text=Hi&type=phone_number&app_absent=0'>
              <p className='text-sm py-2'>Ask free health questions</p>
            </Link>
            <Link href='/Doctors'>
              <p className='text-sm py-2'>Search for doctors</p>
            </Link>
            <Link href='/Blog'>
              <p className='text-sm py-2'>Search for clinics</p>
              <p className='text-sm py-2'>Read health articles</p>
              <p className='text-sm py-2'>Read about medicines</p>
            </Link>
            <Link href='/Doctors'>
              <p className='text-sm py-2'>Consult a doctor</p>
            </Link>
            <Link href='/Doctors'>
              <p className='text-sm py-2'>Health app</p>
            </Link>
          </div>
          <div className='flex flex-col text-center md:text-start pb-8'>
            <Link href='/About'>
              <p className='text-sm pb-2'>About Us</p>
            </Link>
            <Link href='/Coparate'>
              <p className='text-sm py-2'>Corporate Services</p>
            </Link>
            <Link href='/Categories'>
              <p className='text-sm py-2'>Wellness Packages</p>
            </Link>
            <Link href='/ContinuosCare'>
              <p className='text-sm py-2'>Continuous care Programme</p>
            </Link>
            <Link href='/Blog'>
              <p className='text-sm py-2'>Blog</p>
              <p className='text-sm py-2'>Careers</p>
              <p className='text-sm py-2'>Press</p>
            </Link>
            <Link href='/Contacts'>
              <p className='text-sm py-2'>Contact Us</p>
            </Link>
          </div>
          <div className='flex flex-col text-center md:text-start pb-8'>
            <Link href='https://web.facebook.com/zurihealthapp/?_rdc=1&_rdr'>
              <p className='text-sm pb-2'>Facebook</p>
            </Link>
            <Link href='https://twitter.com/ZuriHealth?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'>
              <p className='text-sm py-2'>Twitter</p>
            </Link>
            <Link href='https://www.linkedin.com/company/zuri-health-app/mycompany/'>
              <p className='text-sm py-2'>LinkedIn</p>
            </Link>
            <Link href='https://www.youtube.com/channel/UCeNbgeOSFdH-d-Oo_sBdzzA?app=desktop'>
              <p className='text-sm py-2'>Youtube</p>
            </Link>
            <Link href='https://www.tiktok.com/@zuri_health'>
              <p className='text-sm py-2'>Tiktok</p>
            </Link>
          </div>
          <p className='text-sm pt-12 md:hidden'>(C) 2023 Zuri Health</p>
          <div className='h-full md:flex flex-col items-center justify-center hidden'>
            <div className='flex flex-col items-center justify-between'>
              <h3 className='text-[#00F9ED] mb-4'>Join our community</h3>
              <form onSubmit={(e) => handleClick(e)}>
                <div className='rounded-full bg-white p-4 flex flex-row items-center justify-between  min-w-[240px]'>
                  <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email' className='w-full h-full focus:outline-none text-black' />
                  <button type='submit' className=''>
                    <BsArrowRightShort className='text-black'/>
                  </button>
                </div>
              </form>
            </div>

            <p className='pt-12 text-sm'>(C) 2023 Zuri Health</p>
          </div>  

        </div>
      </div>
    </div>
  )
}

export default Footer