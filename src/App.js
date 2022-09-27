import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import { Header } from './features/Header/header';
import { NavBar } from './features/NavBar/navbar';
import { SearchBar } from './features/SearchBar/searchbar';
import { HomePage } from './features/HomePage/homepage';

function App() {
  return (
    <Router>
      <Header />
      <NavBar />
      <SearchBar />
      {/* <Communities /> */}
      <div>
          <Routes> 
            <Route path='/*' element={<HomePage />}/>

            {/* <Route path='/r/:subreddit/comment/:id/:title' element={<Post/>}/>
            <Route path='/r/:subreddit' element={<Subreddit />}/> */}
          </Routes>
      </div> 
    </Router>
  );
}

export default App;
