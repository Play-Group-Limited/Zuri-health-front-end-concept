import React, { useState } from 'react'
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits, Index } from 'react-instantsearch-dom';

const Search = () => {
  const searchClient = algoliasearch("M0J8AA6NZ9","804ee1df36055dec9d006a729a82ee2d" )
  const [change, setChange] = useState(false)

  console.log(change)

  return (
    <InstantSearch searchClient={searchClient} indexName="pharmacy_products"  >
      <SearchBox 
      // classNames={{
      //   root: 'p-3 shadow-sm',
      //   form: 'relative',
      //   input: 'block w-full bg-red-400',
      //   submitIcon: 'absolute top-0 left-0 bottom-0 w-6',
      // }}
      
      />

      <Index indexName="wellness_package"   hitsPerPage={10} >
        <Hits />
      </Index>

      <Index  indexName="test_product" hitsPerPage={10}>
        <Hits/>
      </Index>
      <Index  indexName="test_kit" hitsPerPage={10}>
        <Hits/>
      </Index>
      <Index  indexName="test_profile" hitsPerPage={10}>
        <Hits/>
      </Index>
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