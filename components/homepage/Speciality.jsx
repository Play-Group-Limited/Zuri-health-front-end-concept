import Image from 'next/image'
import React from 'react'

import SpecialityList from './SpecialityList'

const Speciality = () => {



  return (
    <div className='w-full h-full '>
        <div className='md:mx-60 my-12'>
            <div className='bg-[#00F9ED] w-full h-full p-12 md:rounded-3xl border border-blue-400 '>
                <div className='flex flex-col md:flex-row justify-between'>
                    <div className='flex flex-col items-start justify-center'>
                        <h3 className='text-3xl font-bold'>Explore by Speciality</h3>
                        <p className=''>Find experienced doctors accross all specialities</p>
                    </div>

                    {/* cards */}
                    <div className='flex flex-col md:flex-row'>
                        <SpecialityList />
                        <div className='h-[100%] flex flex-col justify-center items-center'>
                            <p className='mx-2 underline text-center'>View All</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Speciality