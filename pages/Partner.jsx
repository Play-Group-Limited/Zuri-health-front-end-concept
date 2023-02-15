import React from 'react'
import CCPForm from '../components/Forms/CCPForm'
import PartnerForm from '../components/Forms/PartnerForm'
import Featured from '../components/Partner/Featured'
import Featuredsm from '../components/Partner/Featuredsm'

const Partner = () => {
  return (
    <div className='w-screen h-full'>
        <div className='bg-[#052749] w-full h-[40vh] md:h-[50vh] px-4 py-12'>

            <div className=' md:mx-20 lg:mx-60 relative flex flex-col  w-full'>
                <div className='md:absolute top-10'>
                    <div className='hidden md:block my-12'>
                        <Featured />
                    </div>
                    <div className='md:hidden absolute  top-10'>
                        <Featuredsm />
                    </div>
                </div>
                <div className='hidden md:block absolute top-60 left-[50%]'>
                    <PartnerForm />
                </div>

            </div>
        </div>
        <div className='mx-4 md:mx-20 lg:mx-60 relative my-[12rem] '>
            <div className='md:ml-12 md:w-[40vw]'>
                <h3 className='my-4 lg:pt-16 text-[#052749] text-xl font-semibold'>Want to become a Partner?</h3>
                <p>
                    Zuri Health, a mobile app that digitally connects patients across sub-saharan Africa with doctors helping them 
                    access affordable healthcare solutions is looking for you!

                    <br />
                    <br />

                    As for doctors, please note that onboarding is FREE for a the first 6 months with an opportunity to earn 100% extra income from the consultations.

                    <br />
                    <br />

                    To register for onboarding, please sign up  and we will contact you shortly.
                </p>
            </div>

            <div className='md:hidden top-60 right-0 mt-12'>
                <PartnerForm />
            </div>
        </div>
    </div>
  )
}

export default Partner