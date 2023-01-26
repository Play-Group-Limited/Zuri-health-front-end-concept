import Link from 'next/link'
import React, { useState } from 'react'
import ServiceList from './ServiceList'

const Services = () => {

  const products = [
    {
        id: 1,
        img: '/assets/product/man.png',
        text: 'Engage with a doctor',
        link: '/Doctors'

    },
    {
        id: 2,
        img: '/assets/product/1.png',
        text: 'Order Medicine',
        link: '/ContinousCare'

    },
    {
        id: 3,
        img: '/assets/product/2.png',
        text: 'Lab Tests & diagnostics',
        link: '/ContinousCare'

    },
    {
        id: 4,
        img: '/assets/product/3.png',
        text: 'Wellness and more',
        link: '/ContinousCare'

    },
    {
        id: 5,
        img: '/assets/product/4.png',
        text: 'Continuos Care Program',
        link: '/ContinuosCare'

    }
  ]

  const [active, setActive] = useState(products[0])
  console.log("first", active)

  return (
    <div className=' h-full'>
      <div className='md:mx-60'>
        <ServiceList products={products} active={active} setActive={setActive}/>

        {active >=1 ? (
        
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

        ) : null}
      
      </div>

    </div>
  )
}

export default Services