import React from 'react';
import './App.css';
import HomeScreen from './components/HomeScreen.js'
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
      <HomeScreen/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
