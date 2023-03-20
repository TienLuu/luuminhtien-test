import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userAPI from "../../services/userAPI";

interface IUserSlice {
   user: any;
   loading: boolean;
   error: any;
}

const initialState: IUserSlice = {
   user: null,
   loading: false,
   error: null,
};

export const getUser = createAsyncThunk(
   "users/getUser",
   async (id: string | number) => {
      try {
         const data = await userAPI.getUser(id);
         return data;
      } catch (error) {
         throw error;
      }
   }
);

const userSlice = createSlice({
   name: "user",
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(getUser.pending, (state, action) => {
         return { ...state, loading: true, error: null };
      });

      builder.addCase(getUser.fulfilled, (state, action) => {
         return {
            ...state,
            loading: false,
            user: action.payload,
            error: null,
         };
      });

      builder.addCase(getUser.rejected, (state, action) => {
         return { ...state, loading: false, error: action.error.message };
      });
   },
});

export default userSlice.reducer;
