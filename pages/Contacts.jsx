import Image from 'next/image'
import React from 'react'
import ContactForm from '../components/Forms/ContactForm'
import Maps from '../components/Maps'
import maps from '../public/assets/stockImgs/Contact/maps.png'

const Contacts = () => {

    const lat = 37.751;
    const lng = -97.822;

  return (
    <div className='w-full h-full'>
        <div className='bg-[#5BDADD] w-full h-[10%] px-4  py-8 flex items-center justify-center'>
            <div className='w-[1440px]'>
                <h1 className='text-2xl font-bold'>Contact us</h1>
            </div>
        </div>
        <div className='w-full flex flex-col items-center justify-center mt-8'>
            <div className='flex flex-col justify-center max-w-[1440px] px-2'>

                <div className='flex flex-col lg:flex-row justify-between'>
                    <div className='flex flex-col'>
                        <h1 className='font-bold text-3xl lg:w-[30vw]'>We are at your disposal 7 days a week!</h1>

                        <div className='flex flex-col px-4 py-6 bg-[#E9526F] rounded-xl my-8 text-white'>
                            <h3>Contact us</h3>
                            <hr className='mb-8 mt-2'/>

                            <p className='text-lg font-semibold'>+254 742820051</p>
                            <p className='text-sm my-6'>Mon - Fri: 8:00AM-8:00PM</p>
                            <p className='text-sm'>support@zuri.health</p>
                        </div>
                    </div>
                    {/* google maps location for zuri health */}
                    {/* <Image src={maps} alt="replace this image" className='mb-8'/> */}

                    <div className='hidden md:block lg:w-[40vw] lg:h-[40vh] lg:ml-8'>
                        <Maps lat={lat} lng={lng} />
                    </div>
                </div>
                <div className='md:hidden lg:w-[40vw] lg:h-[40vh] lg:ml-8'>
                    <Maps lat={lat} lng={lng} />
                </div>


                <ContactForm />
            </div>
        </div>
    </div>
  )
}

export default Contacts