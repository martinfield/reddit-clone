import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './features/Header/header';
import { NavBar } from './features/NavBar/navbar';
import { SearchBar } from './features/SearchBar/searchbar';
import { HomePage } from './features/HomePage/homepage';
import { Subreddit } from './features/Subreddit/subreddit';
import { PostWithComments } from './features/Comments/postComments';
import CommunitiesSmall from './features/Communities/communitiesSmall';
import {SearchResults} from './features/SearchBar/searchResults'
import { ScrollUpButton } from './features/ScrollUpButton/scrollUpButton';
import "./features/HomePage/feed.css"
import './features/Communities/communities.css'



function App() {
  return (
    <Router>
      <Header />
      <NavBar />
      <SearchBar />
      <CommunitiesSmall /> 
      <ScrollUpButton />
      <div className='feed-container'>
          <Routes> 
            <Route path='/*' element={<HomePage />}/>
            <Route path='/r/:subreddit/comments/:id/:title' element={<PostWithComments />}/>
            <Route path='/r/:subreddit' element={<Subreddit />}/> 
            <Route path='/search/:searchTerm' element={<SearchResults /> } /> 
          </Routes>
      </div> 
    </Router>
  );
}

export default App;
