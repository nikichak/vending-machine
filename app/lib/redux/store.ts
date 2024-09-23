import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './productReducer'
import balanceReducer from './balanceReducer'
import shoppingCartReducer from './shoppingCartReducer'

export const makeStore = () => {
  return configureStore({
    reducer: {
      products: productsReducer,
      balance: balanceReducer,
      shoppingCart: shoppingCartReducer
    }
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
