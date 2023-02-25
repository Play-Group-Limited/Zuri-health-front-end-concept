import React from 'react'
import CCPForm from '../components/Forms/CCPForm'
import PartnerForm from '../components/Forms/PartnerForm'
import Featured from '../components/Partner/Featured'
import Featuredsm from '../components/Partner/Featuredsm'

const Partner = () => {
  return (
    <div className='w-full h-full'>
        <div className='bg-[#052749] w-full  mt-8 '>
            <div className='w-full flex items-center justify-center '>

                <div className='mx-8 max-w-[1440px] relative flex flex-col  w-full'>
                    <div className=' top-10'>
                        <div className='hidden md:block my-12'>
                            <Featured />
                        </div>
                        <div className='md:hidden w-full flex items-center justify-center  top-0'>
                            <Featuredsm />
                        </div>
                    </div>
                    <div className='hidden md:block md:absolute top-60 right-0'>
                        <PartnerForm />
                    </div>

                </div>
            </div>
        </div>
        <div className=' flex flex-col items-center md:items-start md:justify-start justify-center mx-4 py-12'>
            <div className='md:ml-12 md:w-[40vw] lg:max-w-[1440px] my-12 '>
                <h3 className='lg:pt-16 text-[#052749] text-xl font-semibold'>Want to become a Partner?</h3>
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