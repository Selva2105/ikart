import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../features/categorySlice/categorySlice";
import TrendingProductReducer from "../features/TrendingProduct/TrendingProductSlice";
import userCredentialReducer from '../features/userSlice/UserSlice'

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    TrendingProduct: TrendingProductReducer,
    userCredential :userCredentialReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
