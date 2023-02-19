import Image from 'next/image'
import React from 'react'
import Featured from '../components/ContinuosCare/Featured'
import CCPForm from '../components/Forms/CCPForm'


const ContinuosCare = () => {
  return (
    <div className='w-full h-screen'>
        <div className='bg-[#58E5E8] w-full h-[50vh]'>

            <div className='mx-4 md:mx-20 lg:mx-60 relative flex flex-col'>
                <div className='lg:absolute top-10'>
                    <Featured />
                </div>
                <div className='lg:absolute top-60 right-0'>
                    <CCPForm />
                </div>

            </div>
        </div>
        <div className='mx-4 md:mx-20 lg:mx-60 relative my-[12rem] '>
            <div className='ml-12'>
                <h3 className='my-4 text-[#58E5E8] text-lg font-semibold'>Benefits</h3>
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
        </div>
    </div>
  )
}

export default ContinuosCare