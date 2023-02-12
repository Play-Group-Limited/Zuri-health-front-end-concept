import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "Product",
    initialState: {
        products: [],
        quantity: 0,
        total: 0,
    },
    reducers:{
        addProduct: (state, action) => {
            state.products.push(action.payload);
            state.quantity += 1;
            state.total += action.payload.price * action.payload.quantity;
        },
        modifyProductQuantity: () => {},
        reset: (state) => {
            state = initialState;
        }

    }
})

export const {addProduct, reset} = productSlice.actions;
export default productSlice.reducer;