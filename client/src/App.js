import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Food from './components/pages/Food';
import Islands from './components/pages/Islands';
// import Footer from './components/Footer';

function App() {
  return (
    <>
<Router>
   <Navbar />
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/Islands' element={<Islands />} />
    <Route path='/Food' element={<Food />} />
   </Routes>
   </Router>
   </>
  );
}

export default App;
