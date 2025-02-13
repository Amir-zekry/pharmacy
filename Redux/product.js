import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'product',
    initialState: {
        quantities: {}, // Store quantities keyed by product ID
    },
    reducers: {
        increment: (state, action) => {
            const productId = action.payload;
            if (!state.quantities[productId]) {
                state.quantities[productId] = 1; // Initialize if not already set
            } else {
                state.quantities[productId] += 1;
            }
        },
        decrement: (state, action) => {
            const productId = action.payload;
            if (state.quantities[productId] && state.quantities[productId] > 0) {
                state.quantities[productId] -= 1;
            }
        },
        reset: (state, action) => {
            const productId = action.payload;
            state.quantities[productId] = 0;
        },
    },
});

export const { increment, decrement, reset } = productSlice.actions;
export default productSlice.reducer;
