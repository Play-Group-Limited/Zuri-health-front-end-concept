import React from 'react'
import Search from '../components/Search/Search'
import { GoChevronRight } from 'react-icons/go'
import Image from 'next/image'

import DrugList from '../components/Pharmacy/DrugList'
import SearchXl from '../components/Search/SearchXl'
import TalkToDoc from '../components/Pharmacy/TalkToDoc'
import CategoryList from '../components/Pharmacy/CategoryList'
import QuickBtns from '../components/Pharmacy/QuickBtns'
import Testimonials from '../components/homepage/Testimonials'
import Info from '../components/homepage/Info'


const Pharmacy = () => {
  return (
    <div className='w-full h-full'>
         <div className='bg-[#DC246F] w-full h-[50vh]'>

         </div>
         <div className='my-4 flex flex-col mx-2 md:mx-20 lg:mx-60'>
            <div className='flex  flex-col md:flex-row items-center h-full w-full'>
                <SearchXl />
                <TalkToDoc />

            </div>

            <div className='my-4 flex flex-col'>
                <h3 className='text-xl font-bold'>Popular Items</h3>

                <div className='flex flex-row w-full h-full'>
                    {/* drug list */}
                    <DrugList />

                </div>
            </div>

            <div className='my-4 flex flex-col'>
                <h3 className='text-xl font-bold'>Categories</h3>
                
                {/* category list */}
                <div className='my-4'>
                    <CategoryList />
                </div>
            </div>

            <div className=''>
                <QuickBtns />
            </div>

            <div className='my-4'>
                <Info />
            </div>
            
            <div className='my-4'>
                <Testimonials />
            </div>
            


         </div>
    </div>
  )
}

export default Pharmacy