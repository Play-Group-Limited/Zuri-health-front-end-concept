import Image from 'next/image'
import React from 'react'
import { GoChevronRight } from 'react-icons/go'

import doc from '../../public/assets/stockImgs/Pharmacy/phoneMan.png'

const TalkToDoc = () => {
  return (
    <div className='w-full flex flex-row my-4 md:my-0 p-4 py-8 justify-evenly bg-[#8CD3E6] rounded-xl lg:min-h-[250px] mx-2 '>
        <div className='flex flex-col items-center justify-center'>
            <h3 className='text-lg font-bold uppercase tracking-wider text-center'>
                Talk To
                <br />
                A Doctor
            </h3>

            <button className='bg-black mt-6 text-white rounded-xl flex flex-row items-center p-4'>
                <p className='text-sm '>Book Now</p>
                <GoChevronRight  className='ml-4'/>
            </button>
        </div>

        <div>
            <Image src={doc} alt="talk to a doctor"/>
        </div>
    </div>
  )
}

export default TalkToDoc