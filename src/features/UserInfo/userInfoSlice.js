 import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
  
 
  export const fetchUser = createAsyncThunk(
    "usersInfo/fetchUser",
    async (username) => {
      const response = await fetch(`https://www.reddit.com/user/${username}/about.json`);
      const json = await response.json();
      return json.data;
    }
  ); 
  
export const usersInfoSlice = createSlice({
    name: "usersInfo",
    initialState: {
      users: [],
      isLoading: false,
      hasError: false
    },
    reducers: {},
    extraReducers: {
      [fetchUser.pending]: (state) => {
        state.isLoading = true;
        state.hasError = false;
      },
      [fetchUser.fulfilled]: (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        state.users = action.payload;
      },
      [fetchUser.rejected]: (state) => {
        state.isLoading = false;
        state.hasError = true;
      }
    }
});

  export const selectUser = state => state.usersInfo?.users;

  export default usersInfoSlice.reducer;
  