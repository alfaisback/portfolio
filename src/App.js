import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';

const App = () => {
  return (
    <Router>
    <Header />

    <main className='main'>
      <Home/>
      <About/>
    </main>
    </Router>
  )
}

export default App;