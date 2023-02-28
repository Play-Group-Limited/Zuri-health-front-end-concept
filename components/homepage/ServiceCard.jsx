import Image from "next/image"
import Link from "next/link"
import React from "react"
import { BsChevronDown } from "react-icons/bs"

const ServiceCard = ({ image, text, link }) => {
  return (
    <div className='group h-[35vh] md:h-[40vh] lg:h-[30vh]  w-[300px] md:w-full  mx-auto relative'>
      <Link href={link}>
        <div className=' overflow-hidden w-full h-full rounded-[30%] p-4 py-6  flex  items-center justify-center relative'>
          <Image
            src={image}
            alt=''
            fill
            className='w-full h-full object-cover group-hover:scale-150 transition-all duration-300 ease-linear'
          />
          <div className='bg-gradient-to-b from-transparent via-black/60 to-black/90 h-[15vh] w-[100%] absolute bottom-0 left-0 translate-y-[100%] group-hover:translate-y-[0] transition-all duration-300 ease-linear'></div>
          {/* <div className='bg-gradient-to-b from-transparent via-cyan-200/30 to-cyan-400/60 h-[15vh] w-full absolute bottom-0 left-0 '></div> */}
          <div className='  absolute bottom-16 md:bottom-10 left-[30%] right-[30%] items-center justify-center text-center'>
            <p className='font-bold text-white text-lg leading-4 whitespace'>
              {text}
            </p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ServiceCard
