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
          <Route path='/:best?'>
            <Best />
          </Route>
          <Route path='/hot'>
            <Hot />
          </Route>
          <Route path='/new'>
            <New />
          </Route>
          <Route path='/top'>
            <Top />
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
