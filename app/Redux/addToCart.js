import { createSlice } from '@reduxjs/toolkit';

const addToCartSlice = createSlice({
    name: 'addToCart',
    initialState: {},
    reducers: {
        addToCart: (state, action) => {
            const productId = action.payload; // Fix payload structure
            state[productId] = { isLoading: true };
        },
        removeFromCart: (state, action) => {
            const productId = action.payload;
            state[productId] = { isLoading: false };
        },
    },
});

export const { addToCart, removeFromCart } = addToCartSlice.actions;
export default addToCartSlice.reducer;
