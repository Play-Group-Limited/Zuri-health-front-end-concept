import Layout from '../components/Layout'
import StickySearch from '../components/StickySearch'
import '../styles/globals.css'
import store from '../redux/store';
import { persistStore } from "redux-persist";
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function MyApp({ Component, pageProps }) {
  const persistor = persistStore(store)
  return(
    <Provider store={store}>
      <Layout>
          <ToastContainer position="top-center" />
          <Component {...pageProps} />
          <StickySearch />
      </Layout>
    </Provider>

  )
}

export default MyApp
