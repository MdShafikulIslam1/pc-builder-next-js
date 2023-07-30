import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};
export const pcProductsSlice = createSlice({
  name: "pcProducts",
  initialState,
  reducers: {
    addToPc: (state, actions) => {
      state.products.push(actions.payload);
    },
  },
});
export const { addToPc } = pcProductsSlice.actions;
export default pcProductsSlice.reducer;
