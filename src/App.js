import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <NavBar />
      <SearchBar />
      <Communities />
      <main>
        <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route path='/r/:subreddit/comment/:id/:title'>
            <Post />
          </Route>
          <Route path='/r/:subreddit'>
            <Subreddit />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
