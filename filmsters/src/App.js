import React from 'react';
import './App.css';
import MainPage from './frontend/components/MainPage';
import Routers from './frontend/components/Routers'
import Navigation from './frontend/components/Navigation';

function App() {
  return (
    <div className="App">
        <Navigation />
        <Routers />
    </div>
  );
}

export default App;
