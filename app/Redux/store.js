'use client'
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '@/app/Redux/cart';
import filtersReducer from '@/app/Redux/filters'
import addToCartReducer from '@/app/Redux/addToCart'

// ...existing code...

const store = configureStore({
    reducer: {
        cart: cartReducer,
        filters: filtersReducer,
        addToCart: addToCartReducer
    },
});

export default store;
