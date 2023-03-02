import { createSlice } from "@reduxjs/toolkit"

const labCartSlice = createSlice({
  name: "LabCart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProductToLabCart: (state, action) => {
      const { product, quantity } = action.payload
      const existingProduct = state.products.find((p) => p._id === product._id)

      if (existingProduct) {
        // If the product already exists in the labCart, update its quantity
        existingProduct.quantity += quantity
        existingProduct.price = existingProduct.quantity * product.price
      } else {
        // If the product does not exist in the labCart, add it as a new item
        state.products.push({
          product: { ...product },
          quantity,
          price: quantity * product.price,
        })
      }

      // Update the total price and quantity of the labCart
      state.total = state.products.reduce((acc, p) => acc + p.price, 0)
      state.quantity = state.products.reduce((acc, p) => acc + p.quantity, 0)
    },

    // Remove a product from the labCart
    removeProductFromLabCart: (state, action) => {
      const { id } = action.payload
      const productIndex = state.products.findIndex((p) => p.product._id === id)

      if (productIndex !== -1) {
        // If the product is found in the labCart, remove it
        const productToRemove = state.products[productIndex]
        state.products.splice(productIndex, 1)
        state.total -= productToRemove.price
        state.quantity -= productToRemove.quantity
      }

      // Update the total price of the labCart
      state.total = state.products.reduce((acc, p) => acc + p.price, 0)
    },

    // Edit the quantity of a product in the labCart
    editProductQuantity: (state, action) => {
      const { id, quantity } = action.payload
      const productIndex = state.products.findIndex((p) => p.product._id === id)

      if (productIndex !== -1) {
        // If the product is found in the labCart, update its quantity and price
        state.products[productIndex].quantity = quantity
        state.products[productIndex].price =
          quantity * state.products[productIndex].product.price
      }

      // Update the total price and quantity of the labCart
      state.total = state.products.reduce((acc, p) => acc + p.price, 0)
      state.quantity = state.products.reduce((acc, p) => acc + p.quantity, 0)
    },

    // Clear the labCart
    clearLabCart: (state) => {
      state.products = []
      state.total = 0
      state.quantity = 0
    },
  },
})

export const {
  addProductToLabCart,
  editProductQuantity,
  removeProductFromLabCart,
  clearLabCart,
} = labCartSlice.actions
export default labCartSlice.reducer
