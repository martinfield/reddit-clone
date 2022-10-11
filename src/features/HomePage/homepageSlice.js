import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



export const loadBestPage = createAsyncThunk(
    "homepage/loadBestPage",
    async(thunkAPI) => {
        const data = await fetch('http://www.reddit.com/best.json');
        const json = await data.json();

        return json.data.children.map(post => post.data)
    }
)

export const loadHotPage = createAsyncThunk(
    "homepage/loadHotPage",
    async(thunkAPI) => {
        const data = await fetch(`http://www.reddit.com/hot.json`);
        const json = await data.json();

        return json;
    }
)

export const loadNewPage = createAsyncThunk(
    "homepage/loadNewPage",
    async(thunkAPI) => {
        const data = await fetch(`http://www.reddit.com/new.json`);
        const json = await data.json();

        return json;
    }
)

export const loadTopPage = createAsyncThunk(
    "homepage/loadTopPage",
    async(thunkAPI) => {
        const data = await fetch(`http://www.reddit.com/top.json`);
        const json = await data.json();

        return json;
    }
)

export const loadSubredditAbout = createAsyncThunk(
    "homepage/loadSubredditAbout",
    async(subreddit, thunkAPI) => {
        const data = await fetch(`http://www.reddit.com/r/${subreddit}/about.json`);
        const json = await data.json();

        return json.data;
    }
)

export const homePageSlice = createSlice({
    name: 'homePage',
    initialState: {
        posts: [],
        subredditAbout: [],
        isLoading: false,
        hasError: false
    },
    reducers: {
     
    },
    extraReducers: {
        [loadBestPage.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [loadBestPage.fulfilled]: (state, action) => {
            state.posts = action.payload;
            state.isLoading = false;
            state.hasError = false;
        },
        [loadBestPage.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        },
        [loadHotPage.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [loadHotPage.fulfilled]: (state, action) => {
            state.posts = action.payload;
            state.isLoading = false;
            state.hasError = false;
        },
        [loadHotPage.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        },
        [loadNewPage.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [loadNewPage.fulfilled]: (state, action) => {
            state.posts = action.payload;
            state.isLoading = false;
            state.hasError = false;
        },
        [loadNewPage.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        },
        [loadTopPage.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [loadTopPage.fulfilled]: (state, action) => {
            state.posts = action.payload;
            state.isLoading = false;
            state.hasError = false;
        },
        [loadTopPage.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        },
        [loadSubredditAbout.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.hasError = false;
            state.loadSubredditAbout = action.payload;
        }
    }
})

export const selectPosts = state => state.homePage.posts;

export const selectSubredditAbout = state => state.homePage.loadSubredditAbout;

export default homePageSlice.reducer