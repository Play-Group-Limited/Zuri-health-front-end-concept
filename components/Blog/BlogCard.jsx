import Image from 'next/image'
import React from 'react'
import ike from '../../public/assets/stockImgs/Blog/ike.png'


const BlogCard = () => {
  return (
    <div className='flex flex-col w-full mb-4 md:max-w-[30vw] lg:max-w-[18vw]'>
        <Image src={ike} alt='blog' className=''/>
        <hr className='border border-black mt-4'/>
        <div className='flex flex-col'>
            <p className='py-4'>January 20, 2023   |  Nonke Ezeaka</p>
            <h3 className='text-[#57A0DA] font-semibold'>
                Zuri Health Launches Women&apos;s Wellness 
                <br />
                Packages in Kenya and Nigeria
            </h3>
        </div>
    </div>
  )
}

export default BlogCard