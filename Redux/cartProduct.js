import { createSlice } from "@reduxjs/toolkit";

const cartProductSlice = createSlice({
    name: 'cart product',
    initialState: {
        loading: {}, // Track loading state by product ID
    },
    reducers: {
        setLoading: (state, action) => {
            const { productId, isLoading } = action.payload;
            state.loading[productId] = isLoading;
        },
    }
});

export const { setLoading } = cartProductSlice.actions;
export default cartProductSlice.reducer;
