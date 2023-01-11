import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadCommunities = createAsyncThunk(
    "communities/LoadCommunities",
    async(thunkAPI) => {
        const data = await fetch('https://www.reddit.com/subreddits/popular.json');
        const json = await data.json();

        return json.data.children.map(post => post.data);
    }
)

export const communitiesSlice = createSlice({
    name: "communities",
    initialState: {
        communities: [],
        isLoading: false,
        hasError: false
    },
    reducers: {},
    extraReducers: {
        [loadCommunities.pending]: (state) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [loadCommunities.fulfilled]: (state, action) => {
            state.communities = action.payload;
            state.isLoading = false;
            state.hasError = false;
        },
        [loadCommunities.rejected]: (state) => {
            state.isLoading = false;
            state.hasError = true;
        },
    }
})

export const selectCommunities = state => state.communities?.communities;

export default communitiesSlice.reducer;