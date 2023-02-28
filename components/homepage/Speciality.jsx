import Image from "next/image"
import Link from "next/link"
import React from "react"

import SpecialityList from "./SpecialityList"

const Speciality = () => {
  return (
    <div className='w-full h-full flex items-center justify-center'>
      <div className='max-w-[1440px] w-full my-12 md:mx-4'>
        <div className='bg-[#5BDADD] w-full h-full  p-4 pt-8 md:p-12 md:rounded-3xl border border-blue-400  '>
          <div className='flex flex-col md:flex-row justify-evenly w-full'>
            <div className='flex flex-col items-center md:items-start justify-center'>
              <h3 className='text-3xl font-bold text-center'>
                Explore by Speciality
              </h3>
              <p className=''>
                Find experienced doctors accross all specialities
              </p>
              <Link href='/Categories'>
                <p className='mx-2 underline text-center md:hidden pt-6'>
                  View All
                </p>
              </Link>
            </div>

            {/* cards */}
            <div className='flex flex-col md:flex-row md:justify-between'>
              <SpecialityList />
              <div className='h-[100%] flex flex-col justify-center items-center'>
                <Link href='/Categories'>
                  <p className='mx-2 underline text-center hidden md:block '>
                    View All
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Speciality
