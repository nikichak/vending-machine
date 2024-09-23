import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ShoppingCartState {
  selectedProducts: Array<{ label: string; quantity: number; price: number }>
}

const initialState: ShoppingCartState = {
  selectedProducts: []
}

const shoppingCartSlice = createSlice({
  name: 'balance',
  initialState,
  reducers: {
    addToShoppingCart(
      state,
      action: PayloadAction<{
        label: string
        quantity: number
        price: number
      }>
    ) {
      const index = state.selectedProducts.findIndex(
        product => product.label === action.payload.label
      )

      if (index !== -1) {
        state.selectedProducts[index] = {
          ...state.selectedProducts[index],
          quantity: state.selectedProducts[index].quantity + action.payload.quantity
        }
      } else {
        state.selectedProducts.push(action.payload)
      }
    },
    removeFromShoppingCart: (
      state,
      action: PayloadAction<{
        label: string
        quantity: number
        price: number
      }>
    ) => {
      const index = state.selectedProducts.findIndex(
        product => product.label === action.payload.label
      )

      if (index !== -1) {
        state.selectedProducts[index] = {
          ...state.selectedProducts[index],
          quantity: state.selectedProducts[index].quantity - action.payload.quantity
        }
      }
    },
    resetShoppingCart: state => {
      state.selectedProducts = []
    }
  }
})

export const { addToShoppingCart, removeFromShoppingCart, resetShoppingCart } =
  shoppingCartSlice.actions
export default shoppingCartSlice.reducer
