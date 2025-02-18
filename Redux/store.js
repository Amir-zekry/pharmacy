'use client'
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart';
import filtersReducer from '@/Redux/filters'
import addToCartReducer from '@/Redux/addToCart'

// ...existing code...

const store = configureStore({
    reducer: {
        cart: cartReducer,
        filters: filtersReducer,
        addToCart: addToCartReducer
    },
});

export default store;
