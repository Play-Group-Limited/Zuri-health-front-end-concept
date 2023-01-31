import React from 'react'
import DrugCard from './DrugCard'

const DrugList = () => {
  return (
    <div className='flex flex-row justify-evenly w-full mt-8 overflow-x-auto '>
        {/* drug card */}
        <DrugCard />
        <DrugCard />
        <DrugCard />
        <DrugCard />
    </div>
  )
}

export default DrugList