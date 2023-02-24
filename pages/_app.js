import Layout from "../components/Layout"
import StickySearch from "../components/StickySearch"
import "../styles/globals.css"
import store from "../redux/store"
import { persistStore } from "redux-persist"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { Dna } from "react-loader-spinner"
import { useEffect, useState } from "react"
import { Router } from "next/router"

function MyApp({ Component, pageProps }) {
  const persistor = persistStore(store)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const start = () => {
      console.log("start")
      setLoading(true)
    }
    const end = () => {
      console.log("finished")
      setLoading(false)
    }
    Router.events.on("routeChangeStart", start)
    Router.events.on("routeChangeComplete", end)
    Router.events.on("routeChangeError", end)
    return () => {
      Router.events.off("routeChangeStart", start)
      Router.events.off("routeChangeComplete", end)
      Router.events.off("routeChangeError", end)
    }
  }, [])

  if (loading) {
    return (
      <Provider store={store}>
        <Layout>
          <div className='flex min-h-[90vh] items-center justify-center'>
            <Dna visible={true} height='80' width='80' />
          </div>
        </Layout>
      </Provider>
    )
  } else {
    return (
      <Provider store={store}>
        <Layout>
          <ToastContainer position='top-center' />
          <Component {...pageProps} />
          <StickySearch />
        </Layout>
      </Provider>
    )
  }
}

export default MyApp
