import React, { useState } from 'react'
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits, Index } from 'react-instantsearch-dom';
import { useRouter } from 'next/router';

const Search = () => {
  const searchClient = algoliasearch("M0J8AA6NZ9","804ee1df36055dec9d006a729a82ee2d" )
  const [change, setChange] = useState(false)
  const [searchText, setSearchText] = useState('')
  // console.log('•••••••••••••', searchText)

  // console.log(change)

  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (searchText !== null) {
      router.push(`/category/${searchText}`)
    }
  }

  const handleClick = (hit) => {
    let page;
    if(hit.pharmacy_id){
      page = 'Drug'
    } else {
      page = 'Test'
    }
    router.push(`/${page}/${hit._id}`)
  }

  const hitComponent = ({hit})=>{
    // console.log(hit)
    return <p onClick={() => handleClick(hit)} className='py-4 border-b-4'>{hit.name}</p>
  }


  return (
    <InstantSearch searchClient={searchClient} indexName="pharmacy_products"  >
      <SearchBox 
        translations={{
          submitTitle: 'Submit your search query.',
          resetTitle: 'Clear your search query.',
          placeholder: 'Type your search keywords here (eg Panadol 500MG)',
        }}
       className='focus:outline-none w-full'
       onClick={() => setChange(prev => !prev)}
       submit={<img src="/assets/btns/search.png" alt=""/>}
       onChange={(e) => setSearchText(e.target.value)}
       onSubmit={(e) => handleSubmit(e)}
      />

      <div className={`w-auto pt-5 h-[200px] absolute overflow-y-auto bg-white p-4 z-50 rounded-t-xl rounded-b-xl ${change == true ? 'block' : 'hidden'}`}>
        <Index indexName="wellness_package" >
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
