import Image from 'next/image'
import React, { useState } from 'react'
import { BsArrowRight } from 'react-icons/bs'
import DrugList from '../components/Categories/DrugList'
import TalkToDoc from '../components/Pharmacy/TalkToDoc'
import Search from '../components/Search/Search'


const Categories = () => {
    

  return (
    <div className='w-full h-full'>
        <div className='bg-[#5BDADD] w-full h-[10%] px-60 py-8'>
            <p>home</p>
        </div>
        <div className='lg:mx-60 md:mx-20 ml-4 flex flex-col items-center justify-center'>
            {/* category list */}
            <div className='flex flex-row my-8 justify-center'>
                <div className='flex flex-col border-r'>
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

                <div className='w-full flex ml-8 flex-col'>
                    <div className='mx-4 mb-8'>
                        <Search />
                    </div>

                    <DrugList />
                </div>

            </div>
            <div className='flex flex-row'>
                <TalkToDoc />
                <TalkToDoc />
            </div>
        </div>
    </div>
  )
}

export default Categories