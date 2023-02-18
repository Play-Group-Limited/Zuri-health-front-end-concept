import React, { useState } from 'react'

const Faqs = () => {

  const [openOne, setOpenOne] = useState(false)
  
  return (
    <div className='w-full h-full'>
        <div className='bg-[#5BDADD] w-full px-4 h-[10%] lg:px-80 py-8 my-8'>
            <h1 className='text-2xl font-bold'>Frequently Asked Questions</h1>
        </div>
        <div className='lg:mx-80 md:mx-20 mx-4 md:ml-4 flex flex-col  mt-16'>
            <div className='flex flex-col mb-8'>
              <div onClick={() => setOpenOne(prev => !prev)} className='flex flex-row p-8 bg-black w-full rounded-xl justify-between'>
                <h3 className='text-white font-bold text-xl'>Want to become a Partner?</h3>
                <p className='text-white'> + </p>
              </div>

              {openOne ? (
                <div className='my-4 p-4 md:p-12 w-full'>
                  <p>
                    Our website is open 24 hours a day, 7 days a week. Contact Centre support is available from Monday to Sunday, 08:00 am to 8:00 pm. Deliveries will be done for all orders made between 8.00 am to 5.00 pm every day of the week
                  </p>
                </div>
              ) : null}
            </div>
            <div className='flex flex-col mb-8'>
              <div onClick={() => setOpenOne(prev => !prev)} className='flex flex-row p-8 bg-black w-full rounded-xl justify-between'>
                <h3 className='text-white font-bold text-xl'>Do you Accept any Insurance Plans?</h3>
                <p className='text-white'> + </p>
              </div>

              {openOne ? (
                <div className='my-4 p-4 md:p-12 w-full'>
                  <p>
                    Our website is open 24 hours a day, 7 days a week. Contact Centre support is available from Monday to Sunday, 08:00 am to 8:00 pm. Deliveries will be done for all orders made between 8.00 am to 5.00 pm every day of the week
                  </p>
                </div>
              ) : null}
            </div>
            <div className='flex flex-col mb-8'>
              <div onClick={() => setOpenOne(prev => !prev)} className='flex flex-row p-8 bg-black w-full rounded-xl justify-between'>
                <h3 className='text-white font-bold text-xl'>How does Zuri Health work?</h3>
                <p className='text-white'> + </p>
              </div>

              {openOne ? (
                <div className='my-4 p-4 md:p-12 w-full'>
                  <p>
                    Our website is open 24 hours a day, 7 days a week. Contact Centre support is available from Monday to Sunday, 08:00 am to 8:00 pm. Deliveries will be done for all orders made between 8.00 am to 5.00 pm every day of the week
                  </p>
                </div>
              ) : null}
            </div>
            <div className='flex flex-col mb-8'>
              <div onClick={() => setOpenOne(prev => !prev)} className='flex flex-row p-8 bg-black w-full rounded-xl justify-between'>
                <h3 className='text-white font-bold text-xl'>How do you get my sample?</h3>
                <p className='text-white'> + </p>
              </div>

              {openOne ? (
                <div className='my-4 p-4 md:p-12 w-full'>
                  <p>
                    Our website is open 24 hours a day, 7 days a week. Contact Centre support is available from Monday to Sunday, 08:00 am to 8:00 pm. Deliveries will be done for all orders made between 8.00 am to 5.00 pm every day of the week
                  </p>
                </div>
              ) : null}
            </div>
            <div className='flex flex-col mb-8'>
              <div onClick={() => setOpenOne(prev => !prev)} className='flex flex-row p-8 bg-black w-full rounded-xl justify-between'>
                <h3 className='text-white font-bold text-xl'>How long do I have to wait to get my delivery?</h3>
                <p className='text-white'> + </p>
              </div>

              {openOne ? (
                <div className='my-4 p-4 md:p-12 w-full'>
                  <p>
                    Our website is open 24 hours a day, 7 days a week. Contact Centre support is available from Monday to Sunday, 08:00 am to 8:00 pm. Deliveries will be done for all orders made between 8.00 am to 5.00 pm every day of the week
                  </p>
                </div>
              ) : null}
            </div>
        </div>
    </div>
  )
}

export default Faqs