import React from 'react';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact'
import Planning from './pages/Planning'
import Produit from './pages/Produit'
import SignUp from './components/SignUp';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element= {<About/>}/>
        <Route path="/price" element={<Pricing/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/produit" element={<Produit/>} />
        <Route path="/planning" element={<Planning/>} />
        <Route path="/register" element={<SignUp/>} />


        </Routes>
      
    </BrowserRouter>
  );
}

export default App;
