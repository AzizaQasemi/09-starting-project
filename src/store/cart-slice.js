import {createSlice} from '@reduxjs/toolkit'

 const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0,
    }, 
    reducers: {
        addItemToCart(state, actions) {
            const newItem = actions.payload
            const existingItem = state.items.find(
               (item) => item.itemId === newItem.id,
            )
             state.totalQuantity++
           if (!existingItem) {
            state.items.push({
                itemId: newItem.id,
                price: newItem.price,
                quantity: 1, 
                totalPrice: newItem.price,
                title: newItem.title,
            })
           }else{
            existingItem.quantity++
            existingItem.totalPrice += newItem.price
           }
        },
        removeItemFromCart(state, actions) {
            const id = actions.payload
            const existingItem = state.items.find(item => item.itemId === id)
            state.totalQuantity--
            if (existingItem.quantity === 1) {
                state.item = state.item.filter(item => item.itemId !== id)
            }else{
                existingItem.quantity--
            }
        }
    }
})
export const cartActions = cartSlice.actions
export default cartSlice