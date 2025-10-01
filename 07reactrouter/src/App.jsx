import { useState } from 'react'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css'
import Home from './components/Home1/Home.jsx';
import { Routes, Route } from 'react-router-dom';
import About from './components/About/About.jsx';

function App() {
  

  return (
    <>
    <Routes>
      <Route path='/about' element={<About/>}/>
    </Routes>
      <Home/>
      
    </>
  )
}

export default App
