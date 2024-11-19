import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CartState = {
  items: Product[]
  isOpen: boolean
  sidebar: 'cart' | 'delivery' | 'payment' | 'confirm'
  totalPrice: number
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  sidebar: 'cart',
  totalPrice: 0
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Product>) => {
      const product = state.items.find((item) => item.id === action.payload.id)
      if (!product) {
        state.items.push(action.payload)
        state.totalPrice = state.items.reduce(
          (total, item) => total + item.preco,
          0
        )
      } else {
        alert('O prato já está no carrinho')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
      state.totalPrice = state.items.reduce(
        (total, item) => total + item.preco,
        0
      )
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    setSidebar: (
      state,
      action: PayloadAction<'cart' | 'delivery' | 'payment' | 'confirm'>
    ) => {
      state.sidebar = action.payload
    },
    setTotalPrice: (state) => {
      state.totalPrice = state.items.reduce(
        (total, item) => total + item.preco,
        0
      )
    }
  }
})

cartSlice.actions.add

export const { add, open, close, remove, setSidebar, setTotalPrice } =
  cartSlice.actions

export default cartSlice.reducer
