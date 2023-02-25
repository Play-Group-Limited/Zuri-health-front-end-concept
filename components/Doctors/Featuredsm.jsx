import Image from 'next/image'
import React from 'react'
import doctor from "../../public/assets/doctors/d1.png"

const Featuredsm = () => {
  return (
    <div className='w-full rounded-xl'>
        <div className='relative flex items-center justify-center'>
            <Image src={doctor} alt='doctor on phone' className='w-full h-full'/>
            <div className=' absolute w-[90%] rounded-xl h-full top-[45%] p-6 bg-black/60'>
                <div className='flex flex-col justify-center h-full'>
                    <h1 className='lg:text-5xl text-2xl font-bold text-[#FF7F00] text-left'>Connect With <br /> Doctors Virtually</h1>
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

export default Featuredsm