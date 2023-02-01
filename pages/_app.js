import Layout from '../components/Layout'
import StickySearch from '../components/StickySearch'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return(
     
    <Layout>
        <StickySearch />
        <Component {...pageProps} />
    </Layout>

  )
}

export default MyApp
