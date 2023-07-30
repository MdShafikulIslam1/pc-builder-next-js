import { configureStore } from "@reduxjs/toolkit";
import pcProductsReducer from "@/redux/features/pcProducts/PcProductSlice";

export const store = configureStore({
  reducer: {
    pcProducts: pcProductsReducer,
  },
});
