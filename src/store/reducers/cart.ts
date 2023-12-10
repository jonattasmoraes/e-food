import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Restaurants } from '../../pages/Home'

type CartState = {
  items: Restaurants[]
}

const initialState: CartState = {
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Restaurants>) => {
      state.items.push(action.payload)
    }
  }
})

export const { addToCart } = cartSlice.actions
export default cartSlice.reducer
