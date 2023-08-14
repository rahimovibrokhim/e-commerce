import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            let item = state.items.find(i => i.product.id == action.payload.id)
            if (item) item.count++
            else state.items.push({ count: 1, product: action.payload })
        },
        incItemCount(state, action) {
            state.items.find(i => i.product.id === action.payload).count++
        },
        decItemCount(state, action) {
            state.items.find(i => i.product.id === action.payload).count--
        },
        removeItemFromCart(state, action) {
            state.items = state.items.filter(i => i.product.id != action.payload)
        }
    }
})

export const { addToCart, incItemCount, decItemCount, removeItemFromCart } = cartSlice.actions

export default cartSlice.reducer