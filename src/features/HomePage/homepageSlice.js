import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadBestPage = createAsyncThunk(
    "homepage/loadBestPage",
    async(thunkAPI) => {
        const data = await fetch(`http://www.reddit.com/best.json`);
        const json = await data.json();

        return json;
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

export const homePageSlice = createSlice({
    name: 'homePage',
    initialState: {
        posts: [],
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
        }
    }
})

export default homePageSlice.reducer