import React from "react"

const Links = ({ children }) => {
  return (
    <p className='text-slate-600 my-2 relative group cursor-pointer'>
      {children}
      <span className='absolute w-0 h-0.5 bg-[#5CDADC] bottom-0 left-0 group-hover:w-full transition-all duration-150 ease-linear mt-1'></span>
    </p>
  )
}

export default Links
