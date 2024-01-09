import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./categorySlice/categorySlice";
import TrendingProductReducer from "./TrendingProduct/TrendingProductSlice";

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    TrendingProduct: TrendingProductReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
