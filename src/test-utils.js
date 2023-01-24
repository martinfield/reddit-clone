import React from 'react'
import { render } from '@testing-library/react'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
// As a basic setup, import your same slice reducers
import homepageSliceReducer from './features/HomePage/homepageSlice';
import subredditSliceReducer from './features/Subreddit/subredditSlice';
import usersInfoSliceReducer from './features/UserInfo/userInfoSlice';
import postCommentSliceReducer from './features/Comments/postCommentSlice';
import communitiesSliceReducer from './features/Communities/communitiesSlice';
import searchbarSliceReducer from './features/SearchBar/searchbarSlice';


const rootReducer = combineReducers({
    homePage: homepageSliceReducer,
    subreddit: subredditSliceReducer,
    usersInfo: usersInfoSliceReducer,
    postComments: postCommentSliceReducer,
    communities: communitiesSliceReducer,
    searchbar: searchbarSliceReducer
})

export const setupStore = preloadedState => {
    return configureStore({
      reducer: rootReducer,
      preloadedState
    })
  }

export function renderWithProviders(
    ui,
    {
        preloadedState = {},
        // Automatically create a store instance if no store was passed in
        store = setupStore(preloadedState),
        ...renderOptions
    } = {}
    ) {
    function Wrapper({ children }) {
        return <Provider store={store}>{children}</Provider>
    }
    return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}