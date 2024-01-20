import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchProduct = createAsyncThunk(
  'product/fetchProducts',
  async ({ url, query }: { url: string | undefined, query: string | undefined }) => {
    const response = await axios.get(`${url}api/v1/product${query}`);
    return response.data.data.products;
  }
);


interface productState {
  product: Array<object>;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: productState = {
  product: [{}],
  status: 'idle',
  error: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.product = action.payload;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch product';
      });
  },
});

export default productSlice.reducer;
