import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits, Index } from 'react-instantsearch-dom';

const MobileSearch = () => {
  const searchClient = algoliasearch("M0J8AA6NZ9","804ee1df36055dec9d006a729a82ee2d" )
  const [change, setChange] = useState(false)

  console.log(change)
  const hitComponent = ({hit})=>{
    return <p className='py-4 border-b-4'>{hit.name}</p>
  }

  return (
    <InstantSearch searchClient={searchClient} indexName="pharmacy_products"  >
      <SearchBox 
        translations={{
          submitTitle: 'Submit your search query.',
          resetTitle: 'Clear your search query.',
          placeholder: 'Type your search keywords here (eg Panadol 500MG)',
        }}
       className='focus:outline-none'
       onClick={() => setChange(prev => !prev)}
       submit={<img src="/assets/btns/mobileSearch.png" alt=""/>}
      />

      <div className={`w-auto pt-5 h-[200px] absolute overflow-y-auto bg-white p-4 rounded-t-xl rounded-b-xl ${change == true ? 'block' : 'hidden'}`}>
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

  )
}

export default MobileSearch