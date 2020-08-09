import React from 'react';
import './App.css';

import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Recommendedvideos from './Components/RecommendedVideos/RecommendedVideos';
import SearchVideoResults from './Components/SearchVideoResults/SearchVideoResults';

function App() {
  return (
    <div className="App">
          <Router>
              <Header />

              <Switch>
                  <Route path="/search/:searchTerm">

                      <div className="app__page">
                          <Sidebar />
                          <SearchVideoResults />
                      </div>
                  </Route>
                  <Route path="/">

                      <div className="app__page">
                          <Sidebar />
                          <Recommendedvideos />
                      </div>
                  </Route>
              </Switch>
          </Router>
    </div>
  );
}

export default App;
