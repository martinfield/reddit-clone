import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loadSubreddit = createAsyncThunk(
    "subreddit/loadSubreddit",
    async(subreddit, thunkAPI) => {
        const data = await fetch(`http://www.reddit.com/r/${subreddit}.json`);
        const json = await data.json();

        return json.data.children.map(post => post.data);
    }
)

export const loadSubredditAbout = createAsyncThunk(
    "subreddit/loadSubredditAbout",
    async(subreddit, thunkAPI) => {
        const data = await fetch(`https://www.reddit.com/api/info.json?sr_name=${subreddit}`);
        const json = await data.json();

        return json.data.children[0].data;
    }
)

export const subredditSlice = createSlice({
    name: 'subreddit',
    initialState: {
        posts: [],
        subredditAbout: [],
        isLoading: false,
        hasError: false
    },
    reducers: {},
    extraReducers: {
        [loadSubreddit.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [loadSubreddit.fulfilled]: (state, action) => {
            state.posts = action.payload;
            state.isLoading = false;
            state.hasError = false;
        },
        [loadSubreddit.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        },
        [loadSubredditAbout.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [loadSubredditAbout.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.hasError = false;
            state.subredditAbout = action.payload;
        },
        [loadSubredditAbout.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        }
    }
})

export const selectSubredditPosts = state => state.subreddit.posts;
export const selectSubredditAbout = state => state.subreddit.subredditAbout;

export default subredditSlice.reducer ;