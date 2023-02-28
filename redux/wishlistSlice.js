import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify"

const wishlistSlice = createSlice({
  name: "Wishlist",
  initialState: {
    wishlistItems: [],
  },
  reducers: {
    addToWishlist: (state, action) => {
      const { item } = action.payload
      // Check if the item is already in the wishlist
      const itemIndex = state.wishlistItems.findIndex((i) => i._id === item._id)
      if (itemIndex === -1) {
        // If the item is not in the wishlist, add it
        state.wishlistItems.push(item)
        // toast.success("Item added to wishlist")
      }
    },
    removeFromWishlist: (state, action) => {
      const { itemId } = action.payload
      // Remove the item from the wishlist
      state.wishlistItems = state.wishlistItems.filter((i) => i._id !== itemId)
      //   toast.success("Item removed from wishlist")
    },
  },
})

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions
export default wishlistSlice.reducer
