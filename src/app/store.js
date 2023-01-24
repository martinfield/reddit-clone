import { configureStore } from '@reduxjs/toolkit';
import homepageSliceReducer from '../features/HomePage/homepageSlice'; 
import subredditSliceReducer from '../features/Subreddit/subredditSlice';
import  usersInfoSliceReducer  from '../features/UserInfo/userInfoSlice';
import postCommentSliceReducer from '../features/Comments/postCommentSlice';
import communitiesSliceReducer from '../features/Communities/communitiesSlice';
import searchbarSliceReducer from '../features/SearchBar/searchbarSlice';

export const store = configureStore({
  reducer: {
    homePage: homepageSliceReducer,
    subreddit: subredditSliceReducer,
    usersInfo: usersInfoSliceReducer,
    postComments: postCommentSliceReducer,
    communities: communitiesSliceReducer,
    searchbar: searchbarSliceReducer,
  }
});

