export const API_ROOT = 'wwww.reddit.com';

export const loadBestPage = createAsyncThunk(
    "homepage/loadBestPage",
    async(thunkAPI) => {
        const data = await fetch(`${API_ROOT}/best.json`);
        const json = await data.json();

        return json;
    }
)

export const loadHotPage = createAsyncThunk(
    "homepage/loadHotPage",
    async(thunkAPI) => {
        const data = await getHotPage();
        const json = await data.json();

        return json;
    }
)

export const loadNewPage = createAsyncThunk(
    "homepage/loadNewPage",
    async(thunkAPI) => {
        const data = await getNewPage();
        const json = await data.json();

        return json;
    }
)

export const loadTopPage = createAsyncThunk(
    "homepage/loadTopPage",
    async(thunkAPI) => {
        const data = await getTopPage();
        const json = await data.json();

        return json;
    }
)