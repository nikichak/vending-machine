import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface BalanceState {
  balance: number
}

const initialState: BalanceState = {
  balance: 0.0
}

const balanceSlice = createSlice({
  name: 'balance',
  initialState,
  reducers: {
    setBalance(state, action: PayloadAction<number>) {
      state.balance = action.payload
    },
    addBalance(state, action: PayloadAction<number>) {
      state.balance += action.payload
    }
  }
})

export const { setBalance, addBalance } = balanceSlice.actions
export default balanceSlice.reducer
