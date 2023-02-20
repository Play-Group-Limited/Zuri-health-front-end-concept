import Image from 'next/image'
import React from 'react'
import Featured from '../components/Coparate/Featured'
import smallbg from '../public/assets/stockImgs/coporate/smallbg.png'
import xsbg from '../public/assets/stockImgs/coporate/xsbg.png'
import line from '../public/assets/stockImgs/coporate/line.png'
import CorporateForm from '../components/Forms/CorporateForm'
import FeaturedSm from '../components/Coparate/FeaturedSm'

const Coparate = () => {
    console.log("hi")
  return (
    <div className='w-full h-full '>
            <div className='bg-[#FCB7AC] w-full h-[50vh] mb-12'>
                <div className='w-full flex items-center justify-center'>
                    <div className='max-w-[840px] relative w-full'>
                        <div className='hidden md:block overflow-y-visible pt-16 left-20 right-0 top-20'>
                            <Featured />
                        </div>
                        <div className=' md:hidden absolute top-20'>
                            <FeaturedSm />
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full h-full flex items-center justify-center'>
                <div className='max-w-[1440px]'>
                    <div className='mx-4  pt-24  py-8 relative md:my-[14rem] '>
                        <div className='flex flex-col md:flex-row '>
                            <div className='bg-[#1C2E45] p-12 md:py-20 -top-12 rounded-xl w-full md:w-[60%] z-20 md:absolute '>
                                <p className='text-white font-bold text-lg md:text-4xl flex items-center justify-center'>
                                    Show your team that you
                                    <br className='hidden md:block'/>
                                    care with an Employee 
                                    <br className='hidden md:block'/>
                                    Health & Wellness Package
                                </p>
                            </div>

                            <div className='flex flex-col items-center justify-center md:ml-8 text-gray-400 w-full md:w-[80%] mb-8 mt-12'>
                                <div className='md:pt-36'>
                                    <p className='mb-4'>Finaly you can</p>
                                    <span>
                                        <li>Improve your brand image and perception</li>
                                        <li>Boost your team&apos;s productivity all year long</li>
                                        <li>Reduce health cost for company and employees</li>
                                    </span>
                                </div>
                            </div>

                            <div className='w-full flex '>
                                <Image src={smallbg} alt='people' className='w-full object-fill'/>
                            </div>
                        </div>
                    </div>
                    <div className='mx-4  py-8 relative md:my-[14rem] '>
                        <div className='flex flex-col '>
                            <div className='bg-[#89AFF4] p-12 py-20 -top-12 right-0 rounded-xl w-full md:w-[60%] mb-12 z-20 md:absolute'>
                                <p className='text-white flex items-center justify-center font-bold text-lg md:text-4xl '>
                                    Are you facing these challenges 
                                    <br />
                                    in your company?
                                </p>
                            </div>

                            <div className='w-full flex '>
                                <Image src={xsbg} alt='people' className='w-full max-w-[640px] object-fill'/>
                            </div>

                            <div className='flex flex-col items-center justify-center ml-8 text-gray-400 w-[80%] mt-12'>
                                <div>
                                    <p className='mb-4'>Finaly you can</p>
                                    <span>
                                        <li>High reactionary (hospital/HMO) treatment cost for company <br /> and employees.</li>
                                        <li>Absenteeism and employee turnover.</li>
                                        <li>Lack of sharpness among employees due to fatigue and ill-health</li>
                                        <li>Disconnect between company and employee in terms of benefits</li>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mx-4  relative md:my-[14rem] py-12 h-[50vh]'>
                        <div className='flex flex-col md:flex-row relative justify-between items-center'>
                            <div className='flex flex-col relative h-full'>
                                <p className='text-black flex items-center justify-center font-bold text-4xl '>
                                    Ready To Book Your 
                                    <br />
                                    Corporate Health Checkup?
                                </p>

                                <Image src={line} alt='line' className='absolute -bottom-[6vw] md:-right-[10%] md:hidden lg:-right-24 hidden lg:block'/>
                            </div>
                            
                            <div className='lg:w-[50vw] w-[50vw]'>
                                <CorporateForm />
                            </div>

                        
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Coparate