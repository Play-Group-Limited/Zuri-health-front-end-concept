import React, { useState } from 'react'

import { BiSearchAlt } from 'react-icons/bi'
import { BsWhatsapp } from 'react-icons/bs'
import Search from './Search/Search'

const StickySearch = () => {

    const [clicked, setClicked] = useState(false)
    const [whatsapp, setWhatsapp] = useState(false)

  return (
    <div className= "sticky hidden md:flex flex-col justify-center top-[50%] -translate-y-[50%] z-30 ">
    
        <div  className={`bg-black flex items-center justify-center rounded-tr-lg p-2 ${ clicked == true ? "w-[35%] rounded-r-4xl" : "w-[5vh]"}`}>
            <button className="" onClick={() => setClicked(prev => ! prev)}>
                <div className={`p-2 rounded-full bg-[#00FFFF] ${clicked == true ? 'mx-4' : null}`}>
                    <BiSearchAlt className=" text-black"/>
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
        <div  className={`bg-[#32BA46] flex items-center justify-center    rounded-br-lg p-2 ${ whatsapp == true ? "w-[14%]" : "w-[5vh]"}`}>
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