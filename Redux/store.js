'use client'
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart';
import productReducer from './product';
import cartProductReducer from './cartProduct';
import filtersReducer from '@/Redux/filters'

// ...existing code...

const store = configureStore({
    reducer: {
        cart: cartReducer,
        product: productReducer,
        cartProduct: cartProductReducer,
        filters: filtersReducer
    },
});

export default store;
