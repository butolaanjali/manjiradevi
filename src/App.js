import { useState } from 'react';
import './App.css';

import Nav from './Component/Nav';
import Footer from './Component/Footer/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from './Component/Home';
import About from './Component/About';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div>
    <BrowserRouter>
     <Nav/>
   <Routes>
    <Route path="/" element={<Home/>}/>
     <Route path="about" element={<About/>}/>
     </Routes>
     <Footer/>
     </BrowserRouter>
      </div>
  );
}

export default App;