import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Islands';
import Products from './components/pages/Food';

function App() {
  return (
    <>
<Router>
   <Navbar />
   <Routes>
    <Route path='/' exact component={Home} />
    <Route path='/services' exact component={Services} />
    <Route path='/products' exact component={Products} />
   </Routes>
   </Router>
   </>
  );
}

export default App;
