import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loadSearchResults = createAsyncThunk(
    "search/loadSearchResults",
    async(searchTerm, thunkAPI) => {
        const data = await fetch(`http://www.reddit.com/search/.json?q=${searchTerm}`);
        const json = await data.json();

        return json.data.children.map(post => post.data);
    }
)

const searchSlice = createSlice({
    name: 'searchBar',
    initialState: {
        searchResults: [],
        isLoading: false,
        hasError: false
    },
    reducers: {},
    extraReducers: {
        [loadSearchResults.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [loadSearchResults.fulfilled]: (state, action) => {
            state.searchResults = action.payload;
            state.isLoading = false;
            state.hasError = false;
        },
        [loadSearchResults.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        },
    }
})

export const selectSearchResults = state => state.searchBar?.searchResults;


export default searchSlice.reducer ;