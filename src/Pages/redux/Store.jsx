import { configureStore } from '@reduxjs/toolkit';
import createslice, { cartSlice } from './createslice';

export const store = configureStore({
    reducer: {
        cart:  cartSlice,
    },
    devTools: true
});
