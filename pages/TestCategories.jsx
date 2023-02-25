import axios from 'axios'
import Image from 'next/image'
import React, { useState } from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { HiChevronDown } from 'react-icons/hi'
import TestList from '../components/Categories/TestList'
import CategoryList from '../components/Pharmacy/CategoryList'
import CategoryListMobile from '../components/Pharmacy/CategoryListMobile'
import TalkToDoc from '../components/Pharmacy/TalkToDoc'
import Search from '../components/Search/Search'
import { API_URL } from '../config/api.config'

const TestCategories = ({testProduct}) => {
    const [open, setOpen] = useState(false)

  return (
    <div className='w-full h-full flex flex-col items-center justify-center'>
        <div className='bg-[#5BDADD] w-full px-4  py-8 flex items-center justify-center'>
            <div className='w-[75%]'>
                <p>home</p>
            </div>
        </div>
        <div className='max-w-[1440px] mx-4 md:ml-4 flex flex-col items-center justify-center'>

            {/* <div>
                <CategoryListMobile />
            </div> */}
            {/* category list */}
            <div className='flex flex-col md:flex-row my-8 mx-12 md:mx-0 justify-center'>
                <div className='hidden md:flex flex-col border-r'>
                    <h2 className='uppercase font-bold text-2xl pb-8'>Test Categories</h2>
                    
                    <div className='mr-4'>
                        <hr  className='my-4'/>
                        <div className='flex flex-row items-center'>
                            <BsArrowRight className='mr-4'/>
                            <p className='whitespace-nowrap pr-4'>Cancer Screening</p>
                        </div>
                        <hr  className='my-4'/>
                        <div className='flex flex-row items-center'>
                            <BsArrowRight className='mr-4'/>
                            <p className='whitespace-nowrap pr-4'>Diabetes Screening</p>
                        </div>
                        <hr  className='my-4'/>
                        <div className='flex flex-row items-center'>
                            <BsArrowRight className='mr-4'/>
                            <p className='whitespace-nowrap pr-4'>Domestic Staff Test</p>
                        </div>
                        <hr  className='my-4'/>
                        <div className='flex flex-row items-center'>
                            <BsArrowRight className='mr-4'/>
                            <p className='whitespace-nowrap pr-4'>General Health Checkup</p>
                        </div>
                        <hr  className='my-4'/>
                        <div className='flex flex-row items-center'>
                            <BsArrowRight className='mr-4'/>
                            <p className='whitespace-nowrap pr-4'>Heart Health Screening</p>
                        </div>
                        <hr  className='my-4'/>
                        <div className='flex flex-row items-center'>
                            <BsArrowRight className='mr-4'/>
                            <p className='whitespace-nowrap pr-4'>Hypertension</p>
                        </div>
                        <hr  className='my-4'/>
                        <div className='flex flex-row items-center'>
                            <BsArrowRight className='mr-4'/>
                            <p className=''>Pre-Wedding Health Test</p>
                        </div>
                        <hr  className='my-4'/>
                        <div className='flex flex-row items-center'>
                            <BsArrowRight className='mr-4'/>
                            <p className='whitespace-nowrap pr-4'>STD Test</p>
                        </div>
                    </div>
                </div> 

                <div className='md:hidden flex flex-col w-full h-full overflow-x-auto'>
                    <h3 className='text-xl mb-4 font-bold'>Categories</h3>
                        {/* <CategoryListMobile /> */}


                    <div onClick={() => setOpen(prev => !prev)} className={`flex flex-row items-center justify-between bg-slate-200 border-2 rounded-lg p-4 mb-4 ${open ? "mb-0 rounded-b-none" : null}`}>
                        <p className='uppercase font-semibold'> View All Categories</p>
                        <HiChevronDown />
                    </div>
                    
                    {open ? (
                        <div className='bg-slate-200 border-2 rounded-b-lg p-4 mb-4'>
                            <div className='flex flex-row items-center'>
                                <BsArrowRight className='mr-4'/>
                                <p className='whitespace-nowrap pr-4'>Family Care</p>
                            </div>
                            <hr  className='my-4'/>
                            <div className='flex flex-row items-center'>
                                <BsArrowRight className='mr-4'/>
                                <p className='whitespace-nowrap pr-4'>Fitness &amp; Wellness</p>
                            </div>
                            <hr  className='my-4'/>
                            <div className='flex flex-row items-center'>
                                <BsArrowRight className='mr-4'/>
                                <p className='whitespace-nowrap pr-4'>Skin Care</p>
                            </div>
                            <hr  className='my-4'/>
                            <div className='flex flex-row items-center'>
                                <BsArrowRight className='mr-4'/>
                                <p className='whitespace-nowrap pr-4'>Hair Care</p>
                            </div>
                            <hr  className='my-4'/>
                            <div className='flex flex-row items-center'>
                                <BsArrowRight className='mr-4'/>
                                <p className='whitespace-nowrap pr-4'>Lip Care</p>
                            </div>
                            <hr  className='my-4'/>
                            <div className='flex flex-row items-center'>
                                <BsArrowRight className='mr-4'/>
                                <p className='whitespace-nowrap pr-4'>Sexual wellness</p>
                            </div>
                            <hr  className='my-4'/>
                            <div className='flex flex-row items-center'>
                                <BsArrowRight className='mr-4'/>
                                <p className=''>Women&apos;s Care</p>
                            </div>
                            <hr  className='my-4'/>
                            <div className='flex flex-row items-center'>
                                <BsArrowRight className='mr-4'/>
                                <p className='whitespace-nowrap pr-4'>Baby Care</p>
                            </div>
                        </div>
                    ) : null}


                </div>

                <hr className='my-2 md:hidden mb-4'/>

                

                <div className='w-full flex md:ml-8 flex-col justify-center md:justify-start'>
                    <div className='mx-4 mb-8 hidden md:block'>
                        <Search />
                    </div>

                    <TestList products={testProduct.test_products}/>
                </div>

            </div>
            <div className='flex flex-row'>
                <div className='w-full  relative mr-2 my-2'>
                    <Image src='/assets/stockImgs/categories/bg.png' width="10000" height={20} alt='Wellness Package' className='object-fill w-full h-full'/>
                    <div className='absolute bottom-4 p-4  '>
                        <h3 className='text-sm  text-white'>
                            <span className='font-bold'>Download our app |</span>  A world of possibilties awaits
                        </h3>
                    </div>
                </div>
                <TalkToDoc />
            </div>
        </div>
    </div>
  )
}

export const getServerSideProps = async () => {
    const testKit = await axios.get(
      `${API_URL}/labs_and_diagnostic/testkit?page=1`
    )
    const testProfile = await axios.get(
      `${API_URL}/test_profile/get_test_profiles`
    )
    const testProduct = await axios.get(
      `${API_URL}/test_diagnostic/test_product_list`
    )
    const testPackage = await axios.get(
      `${API_URL}/test_diagnostic/display_wellness_packages`
    )
  
    // const data = await res.json();
    // console.log(res.data)
  
    return {
      props: {
        testKit: testKit.data,
        testProfile: testProfile.data,
        testProduct: testProduct.data,
        testPackage: testPackage.data,
      },
    }
  }

export default TestCategories