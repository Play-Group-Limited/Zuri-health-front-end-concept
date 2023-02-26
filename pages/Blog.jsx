import Image from 'next/image'
import React, { useState } from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { HiChevronDown } from 'react-icons/hi'
import BlogCard from '../components/Blog/BlogCard'
import TalkToDoc from '../components/Pharmacy/TalkToDoc'

const Blog = () => {
    const [open, setOpen] = useState(false)
  return (
    <div className='w-full h-full flex flex-col items-center justify-center'>

        <div className='max-w-[1440px] mx-2 md:ml-4 flex flex-col items-center justify-center'>

            {/* category list */}
            <div className='flex flex-col md:flex-row my-8 mx-4 md:mx-0 justify-center'>
                <div className='hidden md:flex flex-col border-r'>
                    <h2 className='uppercase font-bold text-2xl pb-8'>Categories</h2>
                    <div className='mr-4'>
                        <hr  className='my-4'/>
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
                    
                </div> 

                <div className='md:hidden flex flex-col w-full h-full overflow-x-auto'>
                    <h3 className='text-xl mb-4 font-bold'>Categories</h3>
                        {/* <CategoryListMobile /> */}


                    <div onClick={() => setOpen(prev => !prev)} className={`flex flex-row items-center justify-between bg-slate-200 border-2 rounded-lg p-4  ${open ? "mb-0 rounded-b-none" : null}`}>
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

                

                <div className='w-full flex md:ml-8 flex-col min-w-[50vw] justify-center md:justify-start'>
                    <div className='grid grid-cols-1 gap-x-2 md:grid-cols-2 lg:grid-cols-3 gap-2 mx-4'>
                        <BlogCard/>
                        <BlogCard/>
                        <BlogCard/>
                        <BlogCard/>
                        <BlogCard/>
                        <BlogCard/>
                        <BlogCard/>
                    </div>
                </div>

            </div>
            
        </div>
    </div>
  )
}

export default Blog