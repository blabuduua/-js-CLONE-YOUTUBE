import React from 'react';
import './App.css';

import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Recommendedvideos from './Components/RecommendedVideos/RecommendedVideos';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Header />

      <div className="app__page">
        {/* <SideBar /> */}
        <Sidebar />

        {/* <RecommendedVideos /> */}
        <Recommendedvideos />
      </div>
    </div>
  );
}

export default App;
