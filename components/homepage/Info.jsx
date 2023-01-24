import Image from 'next/image'
import React from 'react'
import video1 from '../../public/assets/images/v1.png'
import video2 from '../../public/assets/images/v2.png'
import mockup from '../../public/assets/images/mockup.png'

const Info = () => {
  return (
    <div className='w-full h-full'>
        <div className='md:mx-60 my-12'>
            <div className='flex flex-col md:flex-row items-center justify-between mx-4 md:mx-0'>
                <div className='flex flex-col justify-cente items-center text-center my-4'>
                    <h3 className='text-xl text-[#ED3763]'>Why choose Zuri Health</h3>
                    <p className='text-xs text-slate-500'>Still sitting on the fence? Watch our Video</p>

                    <div className='my-4'>
                        <Image src={video1} alt='join' />
                    </div>
                </div>
                <div className='flex flex-col justify-cente items-center text-center my-4'>
                    <h3 className='text-xl text-[#ED3763]'>Download our app</h3>
                    <p className='text-xs text-slate-500'>A world of possiblities awaits</p>

                    <div className='my-4'>
                        <Image src={mockup} alt='join' />
                    </div>
                </div>
                <div className='flex flex-col justify-cente items-center text-center my-4'>
                    <h3 className='text-xl text-[#ED3763]'>How it works</h3>
                    <p className='text-xs text-slate-500'>Everything you need to know about our Platform</p>

                    <div className='my-4'>
                        <Image src={video2} alt='learn' />
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Info