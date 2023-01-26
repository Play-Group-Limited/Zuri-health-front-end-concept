import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {BsChevronDown} from 'react-icons/bs'

const ServiceCard = ({product, setActive, active}) => {
  return (
    <div className='w-full h-full'>
      {/* <Link href={product.link}> */}
        <div onClick={() => setActive(product.id)} className='w-full h-full rounded-3xl p-4 py-6 relative'>
            <Image src={product.img} alt='' width={50} height={50} className='w-full h-full object-contain' />
            <div className='absolute bottom-10 left-[30%] right-[30%] items-center justify-center text-center'>
                <p className='font-bold text-white text-lg'>{product.text}</p>
            </div>
        </div>
      {/* </Link> */}
        
      { active == product.id ? (
        <div className=' flex mb-4  items-center justify-center'>
          <BsChevronDown size={30} className="text-red-500 "/>
        </div>

      ): null}
    </div>
  )
}

export default ServiceCard