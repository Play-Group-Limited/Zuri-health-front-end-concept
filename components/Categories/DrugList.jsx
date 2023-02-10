import React from 'react'
import DrugCard from './DrugCard'
import DrugCardRx from './DrugCardRx'

const DrugList = () => {
  return (
    <div className='flex flex-wrap items-end'>
        <DrugCard />
        <DrugCard />
        <DrugCard />
        <DrugCard />
        <DrugCard />
        <DrugCardRx />

    </div>
  )
}

export default DrugList