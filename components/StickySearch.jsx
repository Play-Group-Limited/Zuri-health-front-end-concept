import React, { useState } from 'react'

import { BiSearchAlt } from 'react-icons/bi'
import Search from './Search/Search'

const StickySearch = () => {

    const [clicked, setClicked] = useState(false)

  return (
    <div  className={`bg-black z-30 hidden md:flex items-center justify-center sticky top-[50%] -translate-y-[50%] rounded-r-lg p-4 ${ clicked == true ? 'w-[20%]' : 'w-[8vh]'}`}>
        <button className='' onClick={() => setClicked(prev => ! prev)}>
            <div className='p-4 rounded-full bg-[#00FFFF]'>
                <BiSearchAlt className=' text-black'/>
            </div>
            <p className='text-[#00FFFF] text-xs mt-2'>
                Quick <br /> Finder
            </p>
        </button>
        
        {clicked ? (
            <div className='ml-4'>
                <Search />
            </div>
        ) : null}
        
    </div>
  )
}

export default StickySearch 