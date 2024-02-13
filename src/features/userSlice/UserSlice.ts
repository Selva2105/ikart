import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserDetails = createAsyncThunk(
  "User_Credential/fetchUserDetails",
  async ({ url, token }: { url: string | undefined; token: string | null }) => {
    try {
      const response = await axios.get(`${url}api/v1/user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.data.user;
    } catch (error: any) {
      throw error.response.data.message;
    }
  }
);

interface UserSlice {
  userCredential: object;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: UserSlice = {
  userCredential: {},
  status: "idle",
  error: "",
};

const userSlice = createSlice({
  name: "User_Credential",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserDetails.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUserDetails.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.userCredential = action.payload;
      })
      .addCase(fetchUserDetails.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch user credentials";
      });
      
  },
});

export default userSlice.reducer;
