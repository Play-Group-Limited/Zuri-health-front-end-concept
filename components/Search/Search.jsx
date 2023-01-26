import React, { useState } from 'react'
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits, Index } from 'react-instantsearch-dom';

const Search = () => {
  const searchClient = algoliasearch("M0J8AA6NZ9","804ee1df36055dec9d006a729a82ee2d" )
  const [change, setChange] = useState(false)

  console.log(change)
  const hitComponent = ({hit})=>{
    return <p className='py-4 border-b-4'>{hit.name}</p>
  }

  return (
    <InstantSearch searchClient={searchClient} indexName="pharmacy_products"  >
      <SearchBox 
      // classNames={{
      //   root: 'p-3 shadow-sm',
      //   form: 'relative',
      //   input: 'block w-full bg-red-400',
      //   submitIcon: 'absolute top-0 left-0 bottom-0 w-6',
      // }}
       className='focus:outline-none'
       onClick={() => setChange(prev => !prev)}
      />

      <div className={`w-full h-[200px] overflow-y-auto bg-white p-4 rounded-t-xl rounded-b-xl ${change == true ? 'block' : 'hidden'}`}>
        <Index indexName="wellness_package">
          <Hits hitComponent={hitComponent}/>
        </Index>
        <Index indexName="pharmacy_products">
          <Hits hitComponent={hitComponent}/>
        </Index>

        <Index  indexName="test_product">
          <Hits hitComponent={hitComponent}/>
        </Index>
        <Index  indexName="test_kit">
          <Hits hitComponent={hitComponent}/>
        </Index>
        <Index  indexName="test_profile">
          <Hits hitComponent={hitComponent}/>
        </Index>
      </div>
    </InstantSearch>
    // <div className=' rounded-full bg-white p-4 w-full my-8'>
    //     <form >
    //         <div className='flex flex-row'>
    //             {/* <input placeholder='Type you search keywords here e.g (Panadol 500MG)' type="text" name="" id="" className='w-full p-2 focus:outline-none ml-4' /> */}
    //             <button className='mx-2 bg-[#ED3763] rounded-full p-4 px-8'>
    //                 <p className='text-white font-bold tracking-wider'>SEARCH</p>
    //             </button>
    //         </div>
    //     </form>
    // </div>
  )
}

export default Search