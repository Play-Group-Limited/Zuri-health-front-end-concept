import React from 'react'

const Morals = () => {
  return (
    <div className='flex flex-col items-center h-full my-12  justify-center '>
        <h3 className='text-3xl text-[#1865A5] font-bold'>Our Rich Values</h3>
        <div className='p-8 bg-white border border-[#0F9DF4] text-center w-[90%] lg:w-[30%] rounded-xl mt-8 flex flex-col items-center'>
            <h3 className='text-2xl text-[#1865A5] font-bold'>Resposibility</h3>
            <p className='mt-6 text-gray-400'>
                To be accountable for all our actions
            </p>
        </div>
        <div className='p-8 bg-white border border-[#0F9DF4] text-center w-[90%] lg:w-[30%] rounded-xl mt-8 flex flex-col items-center'>
            <h3 className='text-2xl text-[#1865A5] font-bold'>Collaboration</h3>
            <p className='mt-6 text-gray-400'>
                To achieve great things together and bring satisfaction to our users, employees and partner

            </p>
        </div>
        <div className='p-8 bg-white border border-[#0F9DF4] text-center w-[90%] lg:w-[30%] rounded-xl mt-8 flex flex-col items-center'>
            <h3 className='text-2xl text-[#1865A5] font-bold'>Impact & Innovation</h3>
            <p className='mt-6 text-gray-400'>
                To impact positive change to the society and environment
            </p>
        </div>
        <div className='p-8 bg-white border border-[#0F9DF4] text-center w-[90%] lg:w-[30%] rounded-xl mt-8 flex flex-col items-center'>
            <h3 className='text-2xl text-[#1865A5] font-bold'>Health</h3>
            <p className='mt-6 text-gray-400'>
                To foster health, safety, and well-being of everyone
            </p>
        </div>
    </div>
  )
}

export default Morals