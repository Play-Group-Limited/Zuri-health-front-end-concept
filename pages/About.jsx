import Image from 'next/image'
import React from 'react'
import Featured from '../components/About/Featured'
import Featuredsm from '../components/About/Featuredsm'
import team from '../public/assets/stockImgs/About/team.png'
import bgTwo from '../public/assets/stockImgs/About/bgTwo.png'
import onep from '../public/assets/stockImgs/About/one.png'
import twop from '../public/assets/stockImgs/About/two.png'
import threep from '../public/assets/stockImgs/About/three.png'
import vid from '../public/assets/stockImgs/About/video.png'
import one from '../public/assets/stockImgs/About/awards/one.png'
import two from '../public/assets/stockImgs/About/awards/two.png'
import three from '../public/assets/stockImgs/About/awards/three.png'
import four from '../public/assets/stockImgs/About/awards/four.png'
import five from '../public/assets/stockImgs/About/awards/five.png'
import six from '../public/assets/stockImgs/About/awards/six.png'
import seven from '../public/assets/stockImgs/About/awards/seven.png'
import eight from '../public/assets/stockImgs/About/awards/eight.png'
import nine from '../public/assets/stockImgs/About/awards/nine.png'
import ten from '../public/assets/stockImgs/About/awards/ten.png'
import ele from '../public/assets/stockImgs/About/awards/ele.png'

const About = () => {
  return (
    <div className='w-full h-full'>
        <div className='bg-[#57A0DA] w-full h-[50vh] mb-12'>

            <div className='mx-4 md:mx-20 lg:mx-60 relative flex items-center justify-center'>
                <div className='hidden md:block absolute top-20'>
                    <Featured />
                </div>
                <div className=' md:hidden absolute top-20'>
                    <Featuredsm />
                </div>
            </div>
        </div>

        <div className='mx-4 md:mx-20 lg:mx-80 py-8 relative md:my-[14rem] '>
            <div className='flex flex-col md:flex-row items-center justify-between '>
                <Image src={team} alt="team" className='w-full lg:max-w-[30vw]'/>
                
                <div className='md:ml-6 mt-4 md:mt-0 lg:max-w-[60vw]'>
                    <h3 className='font-bold text-[#E9526F] my-4  text-3xl'>
                        Providing affordable and accessible healthcare solutions is at the heart of Zuri Health..
                    </h3>
                    <p className='mt-4 md:mt-0 text-gray-500'>
                        Founded in February 2020, our journey started with a vision. 
                        A vision for quality, affordable and on-demand healthcare for all with a
                         simple swipe. We are creating an all-inclusive service that caters for 
                         all individuals with a mobile device, regardless of their location,
                          health history and social status.
                    </p>
                </div>
            </div>

        </div>
        <div className='relative my-48 md:my-0'>
            <div className='h-[50vh] relative flex items-center justify-center'>
                <Image src={bgTwo} alt='bg' className='w-full h-[80vh] md:h-full '/>
                <div className='absolute md:top-10 flex flex-col items-center'>
                    <h2 className='text-white text-3xl font-bold'>What We Are About</h2>
                    <div className='flex flex-col w-full items-center'>
                        <div className='p-8 bg-white border text-center w-[90%] lg:w-[40%] rounded-xl mt-6 flex flex-col items-center'>
                            <h3 className='text-2xl text-[#E9526F] uppercase font-bold'>Vision</h3>
                            <p className='mt-6 lg:max-w-[80%]'>
                                A healthier world where people are living longer, 
                                happier and healthier lives.

                                Where we anticipate and meet your health needs, 
                                not just in curing illnesses but in preventing them.
                                Where Zuri is at the forefront of making transformative
                                healthcare experiences universally accessible to all.
                            </p>
                        </div>
                        <div className='p-8 bg-white border text-center w-[90%] lg:w-[40%] rounded-xl mt-6 flex flex-col items-center'>
                            <h3 className='text-2xl text-[#E9526F] uppercase font-bold'>MISSION</h3>
                            <p className='mt-6 ]'>
                                To provide the best universal health experience.
                            </p>
                        </div>
                        
                    </div>  
                </div>
            </div>
        </div>
        <div className='flex flex-col items-center justify-center mt-12'>
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
        <div className='flex flex-col md items-center justify-center mt-16 lg:mt-48  mx-6'>
            <h3 className='text-3xl text-[#1865A5] font-bold'>Our Promise</h3>
            <div className='flex flex-col md:flex-row w-full items-center justify-center mt-8'>
                <div className='p-8 text-center rounded-xl mt-4 flex flex-col items-center'>
                    <div className='flex flex-col'>
                        <div className='p-4 border border-[#1865A5] mt-8 mb-4 rounded-full'>
                            <Image src={onep} alt='hope' />
                        </div>
                    </div>
                    <h4 className='font-bold text-xl whitespace-nowrap'>
                        Best price guarantee
                    </h4>
                    <p className='text-gray-400 mt-4'>
                        We guarantee the lowest price. 
                        <br />
                        Find any better deals and we&apos;ll refund the difference.
                    </p>
                </div>
                <div className='p-8 text-center rounded-xl mt-4 flex flex-col items-center'>
                    <div className='flex flex-col'>
                        <div className='p-4 border border-[#1865A5] mt-8 mb-4 rounded-full'>
                            <Image src={twop} alt='hope' />
                        </div>
                    </div>
                    <h4 className='font-bold text-xl'>
                        Certified healthcare services
                    </h4>
                    <p className='text-gray-400 mt-4'>
                        All our medical service providers Are verified <br /> To ensure they are licenced providers.
                    </p>
                </div>
                <div className='p-8 text-center rounded-xl mt-4 flex flex-col items-center'>
                    <div className='flex flex-col'>
                        <div className='p-4 border border-[#1865A5] mt-8 mb-4 rounded-full'>
                            <Image src={threep} alt='hope' />
                        </div>
                    </div>
                    <h4 className='font-bold text-3xl whitespace-nowrap'>
                        Seamless booking
                    </h4>
                    <p className='text-gray-400 mt-4'>
                        An intuitive web and mobile experience to ensure
                        <br />
                        a seamless and secure booking experience always.
                    </p>
                </div>
            </div>
        </div>
        <div className='flex flex-col items-center justify-center mt-16 mx-6 text-center'>
            <h2 className='text-[#1A4A96] text-3xl font-bold'>Watch Our Corporate Video</h2>
            <Image src={vid} alt='coporate video' className='mt-16' />
        </div>
        <div className='flex flex-col items-center justify-center mt-16 py-8 text-center h-full lg:h-[60vh] bg-[#1D2631]'>
            <h2 className='text-white text-3xl font-bold'>Awards</h2>
            <div className='flex flex-wrap lg:max-w-[50%]  justify-center  mt-8'>
                <Image src={one} alt='award' className='p-4 bg-white rounded-lg m-2'/>
                <Image src={two} alt='award' className='p-4 bg-white rounded-lg m-2'/>
                <Image src={three} alt='award' className='p-4 bg-white rounded-lg m-2'/>
                <Image src={four} alt='award' className='p-4 bg-white rounded-lg m-2'/>
                <Image src={five} alt='award' className='p-4 bg-white rounded-lg m-2'/>
                <Image src={six} alt='award' className='p-4 bg-white rounded-lg m-2'/>
                <Image src={seven} alt='award' className='p-4 bg-white rounded-lg m-2'/>
                <Image src={eight} alt='award' className='p-4 bg-white rounded-lg m-2'/>
                <Image src={nine} alt='award' className='p-4 bg-white rounded-lg m-2'/>
                <Image src={ten} alt='award' className='p-4 bg-white rounded-lg m-2'/>
                <Image src={ele} alt='award' className='p-4 bg-white rounded-lg m-2'/>
               
            </div>
        </div>
        
    </div>
  )
}

export default About