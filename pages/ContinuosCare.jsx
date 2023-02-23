import Image from 'next/image'
import React from 'react'
import Featured from '../components/ContinuosCare/Featured'
import Featuredsm from '../components/ContinuosCare/Featuredsm'
import CCPForm from '../components/Forms/CCPForm'


const ContinuosCare = () => {
  return (
    <div className='w-full h-full flex flex-col '>
        <div className='bg-[#58E5E8] w-full lg:h-[70vh] flex items-center justify-center'>

            <div className='mx-4 max-w-[1440px] relative flex flex-col'>
                <div className='hidden md:block  top-10'>
                    <Featured />
                </div>
                <div className='md:hidden top-10 w-full flex items-center justify-center'>
                    <Featuredsm />
                </div>
                <div className='hidden md:block absolute top-60 right-0'>
                    <CCPForm />
                </div>
                

            </div>
        </div>
        <div className='lg:mx-4 max-w-[1440px] my-8  md:my-[12rem] '>
            <div className='lg:ml-12 mx-4'>
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
            <div className='md:hidden mx-2 '>
                <CCPForm />
            </div>
        </div>
    </div>
  )
}

export default ContinuosCare