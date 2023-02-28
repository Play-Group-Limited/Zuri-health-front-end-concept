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
import { useEffect, useRef, useState } from "react"
import { Router } from "next/router"
import LoadingBar from "react-top-loading-bar"

function MyApp({ Component, pageProps }) {
  const persistor = persistStore(store)
  const [loading, setLoading] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const start = () => {
      console.log("start")
      setProgress(90)
      setLoading(true)
    }
    const end = () => {
      console.log("finished")
      setProgress(100)
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

  return (
    <Provider store={store}>
      <Layout>
        <LoadingBar
          color='#DC246F'
          progress={progress}
          shadow={true}
          onLoaderFinished={() => setProgress(0)}
        />
        <ToastContainer position='top-center' />
        <Component {...pageProps} />
        <StickySearch />
      </Layout>
    </Provider>
  )
}

export default MyApp
