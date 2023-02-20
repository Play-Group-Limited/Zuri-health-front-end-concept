import Link from 'next/link'
import React, { useState } from 'react'

import { BiSearchAlt } from 'react-icons/bi'
import { BsUpload, BsWhatsapp } from 'react-icons/bs'
import Search from './Search/Search'

const StickySearch = () => {

    const [clicked, setClicked] = useState(false)
    const [whatsapp, setWhatsapp] = useState(false)

  return (
    <div className= {`sticky hidden md:flex flex-col justify-center w-fit bottom-[40%] -translate-y-[50%] z-30 ${clicked ? "w-fit" : null}`}>
    
        <div  className={`bg-black flex items-center justify-center rounded-tr-lg p-2 ${ clicked == true ? "w-full rounded-r-4xl" : " xl:w-[4vw] lg:w-[5vw] md:w-[5vw]"}`}>
            <button className="" onClick={() => setClicked(prev => ! prev)}>
                <div className={`p-2 rounded-full bg-[#00FFFF] ${clicked == true ? 'mx-4' : null}`}>
                    <BiSearchAlt  size={20} className=" text-black"/>
                </div>
                <p className="text-[#00FFFF] text-xs mt-2">
                    Quick <br /> Finder
                </p>
            </button>
            
            {clicked ? (
                <div className="ml-4">
                    <Search />
                </div>
            ) : null}
            
        </div>
        <Link href='/Pharmacy'>
            <div  className='bg-black flex items-center justify-center md:w-[5vw] xl:w-[4vw]  lg:w-[5vw] p-2'>
                <button className='p-2 rounded-full'>
                    <BsUpload  size={20} className=" text-white"/>
                </button>
            </div>
        </Link>
        <div  className={`bg-[#32BA46] flex items-center justify-center    rounded-br-lg p-2 ${ whatsapp == true ? "w-fit rounded-tr-none" : " xl:w-[4vw] lg:w-[5vw] md:w-[5vw]"}`}>
            <button className="" onClick={() => setWhatsapp(prev => ! prev)}>
                <div className="p-2 rounded-full">
                    <BsWhatsapp size={20} className="text-white"/>
                </div>
            </button>
            
            {whatsapp ? (
                <div className="ml-4">
                    <p className='font-bold text-white'>WhatsApp</p>
                </div>
            ) : null}
            
        </div> 


    </div>


  )
}

export default StickySearch 