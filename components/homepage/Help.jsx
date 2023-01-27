import React from 'react'
import Search from '../Search/Search'
import vera from '../../public/assets/vera/vera.png'
import Image from 'next/image'

const Help = () => {
  return (
    <div className='w-full h-full rounded-3xl flex items-center justify-center bg-[#5BDADD] pt-8 px-8'>
        <div className='flex flex-col items-center justify-between'>
            <h1 className='text-6xl text-center font-bold my-8'>What can we <br /> help you find today?</h1>
            {/* search bar */}
            <div className='w-full'>
                <Search />
            </div>

            {/* vera */}
            <div className='w-full h-full'>
                <div className='flex flex-row items-center justify-center '>
                    <p className='mx-2 text-lg font-semibold'>Need assistance? Chat with Vera</p>
                    <Image src={vera} alt="vera" className='h-full object-fill'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Help