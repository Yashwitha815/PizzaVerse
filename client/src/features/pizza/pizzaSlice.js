import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,

  // Original pizza data
  selectedPizza: null,

  // "add" | "edit"
  mode: "add",

  // Used only while editing
  editingCartId: null,
};

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    openPizza: (state, action) => {
      state.isOpen = true;

      // Supports both old and new calls
      if (action.payload.pizza) {
        state.selectedPizza = action.payload.pizza;
        state.mode = action.payload.mode || "add";
        state.editingCartId = action.payload.editingCartId || null;
      } else {
        state.selectedPizza = action.payload;
        state.mode = "add";
        state.editingCartId = null;
      }
    },

    closePizza: (state) => {
      state.isOpen = false;
      state.selectedPizza = null;
      state.mode = "add";
      state.editingCartId = null;
    },
  },
});

export const { openPizza, closePizza } = pizzaSlice.actions;

export default pizzaSlice.reducer;