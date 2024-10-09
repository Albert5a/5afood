import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product } from '../../pages/Home'

type CartState = {
  items: Product[]
}

const initialState: CartState = {
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Product>) => {
      state.items.push(action.payload)
    }
  }
})

cartSlice.actions.add

export const { add } = cartSlice.actions

export default cartSlice.reducer
