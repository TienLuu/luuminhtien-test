import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authAPI from "../../services/authAPI";
import localService from "../../services/localService";

import { IUserSignin } from "../../type/user.interface";

interface IAuthState {
   user: any | null;
   loading: boolean;
   error: any;
}

const initialState: IAuthState = {
   user: localService.user.get() || null,
   loading: false,
   error: false,
};

export const login = createAsyncThunk(
   "auth/login",
   async (values: IUserSignin) => {
      try {
         const data = await authAPI.signin(values);
         localService.user.set(data);
         return data;
      } catch (error) {
         throw error;
      }
   }
);

const authSlice = createSlice({
   name: "auth",
   initialState,
   reducers: {
      logout: (state, action) => {
         localService.user.remove();
         return {
            ...state,
            user: null,
         };
      },
   },
   extraReducers: (builder) => {
      builder.addCase(login.pending, (state, action) => {
         return {
            ...state,
            loading: true,
            error: false,
         };
      });

      builder.addCase(login.fulfilled, (state, action) => {
         return {
            ...state,
            loading: false,
            user: action.payload,
         };
      });

      builder.addCase(login.rejected, (state, action) => {
         return {
            ...state,
            loading: false,
            error: action.error.message,
         };
      });
   },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
