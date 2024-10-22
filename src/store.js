import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice'; // Adjust the path if needed

const store = configureStore({
    reducer: {
        cart: cartReducer, // Associate the cart slice with the 'cart' key
    },
});

export default store; // Export the configured store
