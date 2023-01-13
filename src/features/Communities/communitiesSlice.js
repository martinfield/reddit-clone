import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadCommunities = createAsyncThunk(
    "communities/loadCommunities",
    async(thunkAPI) => {
        const data = await fetch('https://www.reddit.com/subreddits/popular.json?limit=10');
        const json = await data.json();

        return json.data.children.map(post => post.data);
    }
)

export const communitiesSlice = createSlice({
    name: "communities",
    initialState: {
        communitiesArray: [],
        isLoading: false,
        hasError: false,
    },
    reducers: {},
    extraReducers: {
        [loadCommunities.pending]: (state) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [loadCommunities.fulfilled]: (state, action) => {
            state.communitiesArray = action.payload;
            state.isLoading = false;
            state.hasError = false;
        },
        [loadCommunities.rejected]: (state) => {
            state.isLoading = false;
            state.hasError = true;
        },
    }
})

export const selectCommunities = state => state.communities.communitiesArray;

export default communitiesSlice.reducer;