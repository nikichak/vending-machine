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

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
