import React from 'react'

const Cta = () => {
  return (
    <div className='w-full h-full'>
        <div className='bg-black flex items-center justify-center py-8 '>
                <div className='flex flex-col md:flex-row items-center justify-between w-full max-w-[1440px]'>
                    <h3 className='text-[#5BDADD] text-xl text-center my-4 md:my-0 font-bold'>Dive into a Pool of Continental Expertise</h3>

                    <div className='border border-white rounded-full px-8 py-2 my-4 md:my-0 mx-1'>
                        <p className='text-white text-center'>
                            20,000
                            <br />
                            Accurate lab results
                        </p>
                    </div>
                    <div className='border border-white rounded-full px-8 py-2 my-4 md:my-0 mx-1'>
                        <p className='text-white text-center'>
                            250
                            <br />
                            Doctors
                        </p>
                    </div>
                    <div className='border border-white rounded-full px-8 py-2 my-4 md:my-0 mx-1'>
                        <p className='text-white text-center'>
                            250
                            <br />
                            Specialists
                        </p>
                    </div>
                    <div className='border border-white rounded-full px-8 py-2 my-4 md:my-0 mx-1'>
                        <p className='text-white text-center'>
                            200
                            <br />
                            Accredited Labs
                        </p>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Cta