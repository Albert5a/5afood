import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product } from '../../pages/Home'

type CartState = {
  items: Product[]
  isOpen: boolean
  sidebar: 'cart' | 'delivery' | 'payment'
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  sidebar: 'cart'
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Product>) => {
      const product = state.items.find((item) => item.id === action.payload.id)
      if (!product) {
        state.items.push(action.payload)
      } else {
        alert('O prato já está no carrinho')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    setSidebar: (state, action: PayloadAction<'cart' | 'delivery' | 'payment'>) => {
      state.sidebar = action.payload 
    }
  }
})

cartSlice.actions.add

export const { add, open, close, remove, setSidebar } = cartSlice.actions

export default cartSlice.reducer
