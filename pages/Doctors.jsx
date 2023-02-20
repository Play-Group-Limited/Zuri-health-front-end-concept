import React from 'react'
import DoctorAtHome from '../components/Doctors/DoctorAtHome'
import Featured from '../components/Doctors/Featured'
import Sms from '../components/Doctors/Sms'
import DoctorsForm from '../components/Forms/DoctorsForm'

const Doctors = () => {
  return (
    <div className='w-full h-full'>
        <div className='bg-[#FF7F00] w-full h-[50vh]'>

            <div className='mx-4 md:mx-20 lg:mx-60 relative'>
                <div className='absolute top-10'>
                    <Featured />
                </div>
                <div className=' hidden lg:absolute top-60 right-0 w-[25vw]'>
                    <DoctorsForm />
                </div>

            </div>
        </div>
        <div className='w-full flex items-center justify-center'>
            <div className='mx-4 max-w-[1440px] relative my-[12rem] '>
                <DoctorsForm />
                <div className='ml-12'>
                    <h3 className='my-4 text-[#FF7F00] text-lg font-semibold'>Benefits</h3>
                    <p>
                        <li>Timely and aﬀordable medication reﬁlls</li>
                        <li>Free monthly consultation with a Nutritionist</li>
                        <li>10% oﬀ monthly discount on speciﬁc tests</li>
                        <li>Unlimited chats with a doctor on the WhatsApp bot</li>
                        <li>10% oﬀ on doctor at home visits</li>
                        <li>Personal Healthcare Assistant</li>
                        <li>Healthcare advice</li>
                    </p>
                </div>

                <div className='w-full h-full my-14 pt-8'>
                    <DoctorAtHome />
                </div>
                <div className='w-full h-full my-14'>
                    <Sms />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Doctors