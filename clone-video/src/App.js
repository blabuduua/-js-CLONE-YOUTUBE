import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Recommendedvideos from './Recommendedvideos';
import './App.css';

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
