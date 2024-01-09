import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchtrendingProduct = createAsyncThunk(
  'category/fetchtrendingProduct',
  async (url: string | undefined) => {
    const response = await axios.get(`${url}api/v1/product?fields=brand,name,category,product_list,ratings,images,description&totalSales[gt]=70&limit=8`);
    return response.data.data.products;
  }
);

interface TrendingProductState {
  trendingProduct: Array<object>;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: TrendingProductState = {
  trendingProduct: [{}],
  status: 'idle',
  error: null,
};

const TrendingProductSlice = createSlice({
  name: "Trending_Product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchtrendingProduct.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchtrendingProduct.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.trendingProduct = action.payload;
      })
      .addCase(fetchtrendingProduct.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch trendingProduct';
      });
  },
});

export default TrendingProductSlice.reducer;
