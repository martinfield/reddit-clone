import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const loadComments = createAsyncThunk(
    "postComments/loadComments",
    async(permalink, thunkAPI) => {
        const data = await fetch(`https://www.reddit.com/${permalink}/.json`);
        const json = await data.json();

        return json;
    }
)

export const postCommentsSlice = createSlice({
    name: 'postComments',
    initialState: {
        comments: [],
        isLoading: false,
        hasError: false,
    },
    reducers: {},
    extraReducers: {
        [loadComments.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [loadComments.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.hasError = false;
            state.comments = action.payload;
        },
        [loadComments.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        }
    }
}) 

export const selectPost = state => state.postComments?.comments;

export default postCommentsSlice.reducer;