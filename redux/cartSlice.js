import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "Cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0,
    },
    reducers: {
        addProduct: (state, action) => {
            state.products.push(action.payload);
            state.quantity += 1;
            state.total += action.payload.price * action.payload.quantity;
        },
        modifyAddProductQuantity: (state, action) => {
            let product = state.products.find((product) => product._id === action.payload.id)


            state.products[action.payload.index] = {
                ...(action.payload.product),
                product: {
                    ...product.product,
                    price: action.payload.quantity * action.payload.product.price
                },
                quantity: action.payload.quantity
            }

            if(state.products.length === 1) {
                state.total = state.products.reduce((a, b) => a + b.product.price, 0);
            } else if(state.products.length > 1) {
                console.log('inside cart slice', state.products.reduce((a, b) => a + b.product.price), 0);
                state.total = state.products.reduce((a, b) => a + b.product.price, 0);
            } else {
                state.total = 0
            }
        },
        modifySubtractProductQuantity: (state, action) => {
            let product = state.products.find((product) => product._id === action.payload.id)
            // console.log('product bug', action.payload.product);
            

            state.products[action.payload.index] = {
                ...(action.payload.product),
                product: {
                    ...product.product,
                    price: action.payload.quantity * action.payload.product.price
                },
                quantity: action.payload.quantity,
                // price: action.payload.quantity * action.payload.product.product.price
            }
            if (state.products.length > 1) {
                state.total = state.products.reduce((a, b) => a + b.product.price, 0)
            } else if (state.products.length === 1) {
                state.total = state.products.reduce((a, b) => a + b.product.price, 0)
            } else {
                state.total = 0
            }
        },
        removeProduct: (state, action) => {
            state.products.splice(action.payload.index, 1)
            state.quantity -= 1
            if (state.products.length > 1) {
                state.total = state.products.reduce((a, b) => a + b.product.price, 0)
            } else if (state.products.length === 1) { 
                state.total = state.products[0].quantity * state.products[0].price
            } else {
                state.total = 0
            }
        },
        reset: (state) => {
            // localStorage.clear()
            state.products = [];
            state.quantity = 0
            state.total = 0
        }

    }
})

export const { addProduct, modifyAddProductQuantity, modifySubtractProductQuantity,removeProduct, reset } = cartSlice.actions;
export default cartSlice.reducer;