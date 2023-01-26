import Image from 'next/image'
import React from 'react'
import doctor from "../../public/assets/doctors/d1.png"

const Featured = () => {
  return (
    <div className='w-[60vw] rounded-xl'>
        <div className='relative'>
            <Image src={doctor} alt='doctor on phone' />
            <div className='absolute w-[50%] rounded-r-xl h-[50%] top-[25%] p-6 bg-black/60'>
                <div className='flex flex-col justify-center h-full'>
                    <h1 className='text-5xl font-bold text-[#FF7F00] text-left'>Connect With <br /> Doctors Virtually</h1>
                    <p className='text-left text-white py-4'>
                        Consultations via SMS or video/audio
                        <br />
                        Chats on Web and Apps 
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured