import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadHomePage = createAsyncThunk(
    "homepage/loadHomePage",
    async(thunkAPI) => {
        const data = await fetch('https://www.reddit.com/.json');
        const json = await data.json();

        return json.data.children.map(post => post.data)
    }
)

export const loadBestPage = createAsyncThunk(
    "homepage/loadBestPage",
    async(thunkAPI) => {
        const data = await fetch('https://www.reddit.com/best.json');
        const json = await data.json();

        return json.data.children.map(post => post.data)
    }
)

export const loadHotPage = createAsyncThunk(
    "homepage/loadHotPage",
    async(thunkAPI) => {
        const data = await fetch('https://www.reddit.com/hot.json');
        const json = await data.json();

        return json.data.children.map(post => post.data);
    }
)

export const loadNewPage = createAsyncThunk(
    "homepage/loadNewPage",
    async(thunkAPI) => {
        const data = await fetch(`https://www.reddit.com/new.json`);
        const json = await data.json();

        return json.data.children.map(post => post.data);
    }
)

export const loadTopPage = createAsyncThunk(
    "homepage/loadTopPage",
    async(thunkAPI) => {
        const data = await fetch(`http://www.reddit.com/top.json`);
        const json = await data.json();

        return json.data.children.map(post => post.data);
    }
)

export const homePageSlice = createSlice({
    name: 'homePage',
    initialState: {
        homePosts: [],
        bestPosts: [],
        hotPosts: [],
        newPosts: [],
        topPosts: [],
        isLoading: false,
        hasError: false
    },
    reducers: {},
    extraReducers: {
        [loadHomePage.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [loadHomePage.fulfilled]: (state, action) => {
            state.homePosts = action.payload;
            state.isLoading = false;
            state.hasError = false;
        },
        [loadHomePage.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        },
        [loadBestPage.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [loadBestPage.fulfilled]: (state, action) => {
            state.bestPosts = action.payload;
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
            state.hotPosts = action.payload;
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
            state.newPosts = action.payload;
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
            state.topPosts = action.payload;
            state.isLoading = false;
            state.hasError = false;
        },
        [loadTopPage.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        },
        
    }
})

export const selectHomePosts = state => state.homePage.homePosts;
export const selectBestPosts = state => state.homePage.bestPosts;
export const selectHotPosts = state => state.homePage.hotPosts;
export const selectNewPosts = state => state.homePage.newPosts;
export const selectTopPosts = state => state.homePage.topPosts;

export default homePageSlice.reducer;