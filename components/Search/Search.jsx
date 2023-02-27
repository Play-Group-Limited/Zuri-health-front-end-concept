import React, { useState } from "react"
import algoliasearch from "algoliasearch/lite"
import { InstantSearch, SearchBox, Hits, Index } from "react-instantsearch-dom"
import { useRouter } from "next/router"

const Search = () => {
  const searchClient = algoliasearch(
    "M0J8AA6NZ9",
    "804ee1df36055dec9d006a729a82ee2d"
  )
  const [change, setChange] = useState(false)
  const [searchText, setSearchText] = useState("")
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
    let page
    if (hit.pharmacy_id) {
      page = "Drug"
    } else {
      page = "Test"
    }
    console.log(page)
    router.push(`/${page}/${hit._id}`)
  }

  const hitComponent = ({ hit }) => {
    // console.log(hit)
    return (
      <p
        onClick={() => handleClick(hit)}
        className='py-4 border-b-4 hover:bg-gray-100 cursor-pointer text-base px-3 transition-all duration-150 ease-linear'>
        {hit.name}
      </p>
    )
  }

  return (
    <InstantSearch searchClient={searchClient} indexName='pharmacy_products'>
      <SearchBox
        translations={{
          submitTitle: "Submit your search query.",
          resetTitle: "Clear your search query.",
          placeholder: "Type your search keywords here (eg Panadol 500MG)",
        }}
        className='focus:outline-none w-full '
        onClick={() => setChange((prev) => !prev)}
        submit={<img src='/assets/btns/search.png' alt='' />}
        onChange={(e) => setSearchText(e.target.value)}
        onSubmit={(e) => handleSubmit(e)}
      />

      <div
        className={`w-fit bg-white pt-5 h-[200px] absolute overflow-y-auto  p-4 z-50 rounded-t-xl rounded-b-xl shadow-md min-w-[15vw]   ${
          change === true ? "block" : "hidden"
        }`}>
        <Index indexName='wellness_package'>
          <Hits hitComponent={hitComponent} />
        </Index>
        <Index indexName='pharmacy_products'>
          <Hits hitComponent={hitComponent} />
        </Index>

        <Index indexName='test_product'>
          <Hits hitComponent={hitComponent} />
        </Index>
        <Index indexName='test_kit'>
          <Hits hitComponent={hitComponent} />
        </Index>
        <Index indexName='test_profile'>
          <Hits hitComponent={hitComponent} />
        </Index>
      </div>
    </InstantSearch>
  )
}

export default Search
