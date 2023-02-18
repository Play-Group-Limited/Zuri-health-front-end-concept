import Link from 'next/link'
import React, { useState } from 'react'
import ServiceList from './ServiceList'

const Services = () => {

  

  // const [active, setActive] = useState(products[0])
  // console.log("first", active)

  return (
    <div className='w-full h-full'>
      <div className='flex items-center justify-center '>
        <ServiceList />

        {/* {active >=1 ? (
        
        <div className='my-2 mx-8'>
          <div className='p-4 bg-red-500  rounded-xl items-center justify-center flex flex-col md:flex-row'>
            <Link href='/ContinuosCare'>
              <div className='border-b md:border-b-0 md:border-r border-white'>
                <p className='text-white mx-2 my-4 md:my-0'>Book a lab test</p>
              </div>
            </Link>
            <div className='border-b md:border-b-0 md:border-r border-white'>
              <p className='text-white mx-2 my-4 md:my-0'>Get Tested at home</p>
            </div>
            <div className='border-b md:border-b-0 md:border-r border-white'>
              <p className='text-white mx-2 my-4 md:my-0'>Men Wellness Package</p>
            </div>
            <div className=''>
              <p className='text-white mx-2 my-4 md:my-0'>Women Wellness Package</p>
            </div>
          </div>
        </div>

        ) : null} */}
      
      </div>

    </div>
  )
}

export default Services