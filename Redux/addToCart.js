import { createSlice } from '@reduxjs/toolkit';

const addToCartSlice = createSlice({
    name: 'addToCart',
    initialState: {
        value: false,
    },
    reducers: {
        addToCart: state => {
            state.value = true;
        },
        removeFromCart: state => {
            state.value = false;
        }
    },
})

export const { addToCart, removeFromCart } = addToCartSlice.actions;
export default addToCartSlice.reducer;