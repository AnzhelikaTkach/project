import { configureStore } from "@reduxjs/toolkit";

import categoriesSlice from "./slices/categoriesSlice";
import productsSlice from "./slices/productsSlice";
import cartSlice from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    products: productsSlice,
    cart: cartSlice,
  },
  // devTools: true,
});