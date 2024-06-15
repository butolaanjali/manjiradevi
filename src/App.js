import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Component/Nav';
import Footer from './Component/Footer/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from './Component/Home';
import About from './Component/About/About';
import Program from './Component/Program/Program';
import Contact from './Component/Contact/Contact';
import OurSchool from './Component/OurSchool/OurSchool';
import Admission from './Component/Admission/Admission';
import Academics from './Component/Academics/Academics';
import Research from './Component/Research/Research';
import Layout from './Component/Layout/Layout';
import Lifemanjira from './Component/Lifemanjira/Lifemanjira';
import Vision from './Component/About/vision';
import Engineer from './Component/Engineer/Engineer';
import School1 from './Component/Engineer/School1';
import Mechanic from './Component/Engineer/Mechanic';
import Cse from './Component/Engineer/Cse';
import School2 from './Component/Science/School2';
import Nursing from './Component/Nursing/Nursing';
import Nursingschool from './Component/Nursing/Nursingschool';
import  Ai from './Component/Science/Ai';
import Bca from './Component/Science/Bca';
import Bsc from './Component/Science/Bsc';
import Cyber from './Component/Science/Cyber';
import Data from './Component/Science/Data';
import Foresic from './Component/Science/Foresic';
import Mca from './Component/Science/Mca';
import Msc from './Component/Science/Msc';




import Gnm from './Component/Nursing/Gnm';
import Pharma from './Component/Nursing/Pharma';
import Bpharma from './Component/Nursing/Bpharma';
import Anm from './Component/Nursing/Anm';
import Bpt from './Component/Nursing/Bpt';
import Mph from './Component/Nursing/Mph';
import Bnys from './Component/Yogicscience/Bnys';
import Bscyogic from './Component/Yogicscience/Bscyogic';
import Mscyogic from './Component/Yogicscience/Mscyogic';
import Mayogic from './Component/Yogicscience/Mayogic';
import Phdyogic from './Component/Yogicscience/Phdyogic';
import Pgdyogic from './Component/Yogicscience/Pgdyogic';
import BaArts from './Component/ArtsHumanity/BaArts';
import Msccp from './Component/Nursing/Msccp';
import Yogicschool from './Component/Yogicscience/Yogicschool';
import Artsschool from './Component/ArtsHumanity/Artsschool';
import Maarts from './Component/ArtsHumanity/Maarts';
import Phdarts from './Component/ArtsHumanity/Phdarts';
import Bedarts from './Component/ArtsHumanity/Bedarts';
import Legalschool from './Component/LegalStudies/Legalschool';
import Ballb from './Component/LegalStudies/Ballb';
import Llb from './Component/LegalStudies/Llb';
import Hotelschool from './Component/HotelMangement/Hotelschool';
import Diplomahm from './Component/HotelMangement/Diplomahm';
import Bbatourism from './Component/HotelMangement/Bbatourism';
import Bachelorhm from './Component/HotelMangement/Bachelorhm';







function App() {
  return (
    <div>
      <Router>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="program" element={<Program/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="school" element={<OurSchool/>}/>
          <Route path="admission" element={<Admission/>}/>
          <Route path="academics" element={<Academics/>}/>
          <Route path="research" element={<Research/>}/>
          <Route path="layout" element={<Layout/>}/>
          <Route path="lifemanjira" element={<Lifemanjira/>}/>
          <Route path="vision" element={<Vision/>}/>
          <Route path ="school1" element={<School1/>}/>
          <Route path ="engineer" element={<Engineer/>}/>
          <Route path ="mechanic" element={<Mechanic/>}/>
          <Route path ="cse" element={<Cse/>}/>
          <Route path ="school2" element={<School2/>}/>
          <Route path="nursing" element={<Nursing/>}/>

          <Route path='ai' element={<Ai/>}/>
          <Route path="bca" element={<Bca/>}/>
          <Route path="bsc" element={<Bsc/>}/>
          <Route path="cyber" element={<Cyber/>}/>
          <Route path="data" element={<Data/>}/>
          <Route path="foresic" element={<Foresic/>}/>
          <Route path="mca" element={<Mca/>}/>
          <Route path="msc" element={<Msc/>}/>
         

          <Route path="msccp" element={<Msccp/>}/>
          <Route path="gnm" element={<Gnm/>}/>
          <Route path="dpharma" element={<Pharma/>}/>
          <Route path="bpharma" element={<Bpharma/>}/>
          <Route path="anm" element={<Anm/>}/>
          <Route path="bpt" element={<Bpt/>}/>
          <Route path="mph" element={<Mph/>}/>
          <Route path="bnys" element={<Bnys/>}/>
          <Route path="bscyogic" element={<Bscyogic/>}/>
          <Route path="mscyogic" element={<Mscyogic/>}/>
          <Route path="mayogic" element={<Mayogic/>}/>
          <Route path="phdyogic" element={<Phdyogic/>}/>
          <Route path="pgdyogic" element={<Pgdyogic/>}/>
          <Route path="baarts" element={<BaArts/>}/>
          <Route path="nursingschool" element={<Nursingschool/>}/>
          <Route path="yogicschool" element={<Yogicschool/>}/>
          <Route path="artsschool" element={<Artsschool/>}/>
          <Route path="maarts" element={<Maarts/>}/>
          <Route path="phdarts" element={<Phdarts/>}/>
          <Route path="bedarts" element={<Bedarts/>}/>
          <Route path="legalschool" element={<Legalschool/>}/>
          <Route path="balegal" element={<Ballb/>}/>
          <Route path="llblegal" element={<Llb/>}/>
          <Route path="hotelschool" element={<Hotelschool/>}/>
          <Route path="hmdiploma" element={<Diplomahm/>}/>
          <Route path="bbatourism" element={<Bbatourism/>}/>
          <Route path="bachelorhm" element={<Bachelorhm/>}/>
          
          
        
</Routes>
      
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
