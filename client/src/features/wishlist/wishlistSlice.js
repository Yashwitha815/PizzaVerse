import { createSlice } from "@reduxjs/toolkit";

const savedWishlist = localStorage.getItem("wishlistItems");

const initialState = {
  wishlistItems: savedWishlist
    ? JSON.parse(savedWishlist)
    : [],
};

const saveWishlist = (items) => {
  localStorage.setItem(
    "wishlistItems",
    JSON.stringify(items)
  );
};

const wishlistSlice = createSlice({
  name: "wishlist",

  initialState,

  reducers: {

    toggleWishlist: (state, action) => {

      const pizza = action.payload;

      const exists = state.wishlistItems.find(
        item => item._id === pizza._id
      );

      if (exists) {

        state.wishlistItems =
          state.wishlistItems.filter(
            item => item._id !== pizza._id
          );

      } else {

        state.wishlistItems.push(pizza);

      }

      saveWishlist(state.wishlistItems);

    },

    clearWishlist: (state) => {

      state.wishlistItems = [];

      saveWishlist([]);

    }

  }

});

export const {
  toggleWishlist,
  clearWishlist
} = wishlistSlice.actions;

export default wishlistSlice.reducer;