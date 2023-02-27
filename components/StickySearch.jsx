import Link from "next/link"
import React, { useState } from "react"

import { BiSearchAlt } from "react-icons/bi"
import { BsUpload, BsWhatsapp } from "react-icons/bs"
import Search from "./Search/Search"

const StickySearch = () => {
  const [clicked, setClicked] = useState(false)
  const [whatsapp, setWhatsapp] = useState(false)

  return (
    <div
      className={`sticky hidden md:flex flex-col justify-center w-fit bottom-[40%] -translate-y-[50%] z-30  ${
        clicked ? "w-fit" : null
      }`}>
      <div
        onMouseOver={() => setClicked(true)}
        onMouseLeave={() => setClicked(false)}
        className={`bg-black flex items-center justify-center rounded-tr-lg p-2  transition-all duration-300 hover:w-full ${
          clicked == true
            ? "w-full rounded-r-4xl transition-all duration-200 ease-linear"
            : " xl:w-[4vw] lg:w-[5vw] md:w-[5vw]"
        }`}>
        <button className=''>
          <div
            className={`p-2 rounded-full bg-[#00FFFF] ${
              clicked == true ? "mx-4" : null
            }`}>
            <BiSearchAlt size={20} className=' text-black' />
          </div>
          <p className='text-[#00FFFF] text-xs mt-2'>
            Quick <br /> Finder
          </p>
        </button>

        {clicked ? (
          <div className='ml-4'>
            <Search />
          </div>
        ) : null}
      </div>
      <Link href='/Pharmacy'>
        <div className='bg-black flex items-center justify-center md:w-[5vw] xl:w-[4vw]  lg:w-[5vw] p-2'>
          <button className='p-2 rounded-full'>
            <BsUpload size={20} className=' text-white' />
          </button>
        </div>
      </Link>
      <Link href='https://api.whatsapp.com/send/?phone=2349130006888&text=Hi&type=phone_number&app_absent=0'>
        <div
          onMouseOver={() => setWhatsapp(true)}
          onMouseLeave={() => setWhatsapp(false)}
          className={`cursor-pointer bg-[#32BA46] flex items-center justify-center    rounded-br-lg p-2 transition-all duration-300 hover:w-full${
            whatsapp == true
              ? "w-fit rounded-tr-none transition-all duration-300 hover:w-full"
              : " xl:w-[4vw] lg:w-[5vw] md:w-[5vw]"
          }`}>
          <button className=''>
            <div className='p-2 rounded-full'>
              <BsWhatsapp size={20} className='text-white' />
            </div>
          </button>

          {whatsapp ? (
            <div className='ml-4 transition-all duration-300 hover:w-full'>
              <p className='font-bold text-white transition-all duration-300 hover:w-full'>
                WhatsApp
              </p>
            </div>
          ) : null}
        </div>
      </Link>
    </div>
  )
}

export default StickySearch
