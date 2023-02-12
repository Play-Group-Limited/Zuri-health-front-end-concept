import Layout from '../components/Layout'
import StickySearch from '../components/StickySearch'
import '../styles/globals.css'
import store from '../redux/store';
import { persistStore } from "redux-persist";
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";

function MyApp({ Component, pageProps }) {
  const persistor = persistStore(store)
  return(
    <Provider store={store}>
      <Layout>
          <StickySearch />
          <Component {...pageProps} />
      </Layout>
    </Provider>

  )
}

export default MyApp
