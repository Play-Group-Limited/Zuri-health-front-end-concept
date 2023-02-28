import { configureStore, combineReducers } from "@reduxjs/toolkit"
import cartReducer from "./cartSlice"
import wishlistReducer from "./wishlistSlice"
import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import { getDefaultMiddleware } from "@reduxjs/toolkit"

const persistStorage = {
  key: "root",
  storage,
}

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
})

export const rootReducers = combineReducers({
  cart: cartReducer,
  wishlist: wishlistReducer,
})

const persistedReducer = persistReducer(persistStorage, rootReducers)

export default configureStore({
  reducer: persistedReducer,
  middleware: customizedMiddleware,
})
