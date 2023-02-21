import Image from 'next/image'
import React from 'react'
import patient from '../../public/assets/doctors/d2.png'
import DocAtHomeForm from '../Forms/DocAtHomeForm'

const DoctorAtHome = () => {
  return (
    <div>
        <hr className='my-8'/>
        <div className='my-4 flex flex-col'>
            <div className='w-[30%] border-2 p-4 my-4 rounded-xl'>
                <select className='w-full  '>
                    <option value="Home">Doctor Visit At home</option>
                    <option value="Office">Office</option>
                    <option value="Airport">Airport</option>
                </select>
            </div>
            <div className='flex md:flex-col lg:flex-row'>
                <div className='rounded-l-xl justify-center items-center flex flex-col lg:flex-row  my-8'>
                    <div className='w-full relative rounded-none rounded-r-lg'>
                        <Image src={patient} alt='patient'  className=''/>

                        <div className='absolute w-[60%] rounded-r-xl  h-[60%] top-[25%] p-6 bg-black/60'>
                            <div className='h-full flex flex-col justify-center'>
                                <h3 className='text-2xl font-bold text-[#3AC716]'>Get a doctor visit at home</h3>
                                <p className='my-2 text-white'>
                                    Aﬀordable Healthcare from the
                                    comfort of your home
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='pt-8 text-xl md:'>
                        <DocAtHomeForm />
                    </div>
                </div>
            </div>
        </div>
        <hr className='my-8'/>
    </div>
  )
}

export default DoctorAtHome