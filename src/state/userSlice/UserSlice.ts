import { createSlice } from "@reduxjs/toolkit";


interface UserSlice {
  userCredential: object;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: UserSlice = {
  userCredential: {},
  status: "idle",
  error: null,
};

const userSlice = createSlice({
    name:"User_Credential",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        // builder
        // .addCase()
    }
})
