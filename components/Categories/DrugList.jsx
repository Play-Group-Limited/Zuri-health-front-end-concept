import React from 'react'
import DrugCard from './DrugCard'
import DrugCardRx from './DrugCardRx'

const DrugList = () => {
  return (
    <div className='flex flex-col md:flex-row md:flex-wrap md:items-end justify-center'>
        <DrugCard />
        <DrugCard />
        <DrugCard />
        <DrugCard />
        <DrugCard />
        <DrugCard />

    </div>
  )
}

export default DrugList