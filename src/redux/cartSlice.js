import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: []
    },
    reducers: {
        addToCart: (state, action) => {
            const itemInCart = state.cart.find((item) => item.name === action.payload.name);
            if (itemInCart) {
                itemInCart.quantity++;
            } else {
                state.cart.push({ ...action.payload, quantity: 1 });
            }
        },
        addQty: (state, action) => {
            console.log(action.payload, "DKDOKDDKODKODKODOK");
            const itemInCart = state.cart.find((item) => item.name === action.payload.name);
            if (itemInCart) {
                itemInCart.quantity++;
            }
        },
        reduceQty: (state, action) => {
            const itemInCart = state.cart.find((item) => item.name === action.payload.name);
            if (itemInCart && itemInCart.quantity !== 1) {
                itemInCart.quantity--;
            }
        },
    }
})

// export default cartSlice;
// export const { addToCart } = cartSlice.reducer


export const { addToCart, addQty, reduceQty } = cartSlice.actions;
export default cartSlice.reducer;