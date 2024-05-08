import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import "./App.css";

// components

import Header from "./components/Header";
import Footer from "./components/Footer";
import Container from "./components/Container";
import About from "./components/About.js";
import Photos from "./components/Photos";
import Videos from "./components/Videos.js";
import Gigs from "./components/Gigs.js"
import Contact from "./components/Contact.js";


function App() {
  return ( 
    <BrowserRouter>
    <Header />
  <h1  ClassName="navbar-brand">Dave & Ramon</h1>

  <h1>Jazz Guitar Duo</h1>
    <Routes>
        <Route path='/' element={<Container />} />
        <Route path="about" element={<About />} />
        <Route path="gigs" element={<Gigs />} />
        <Route path="photos" element={<Photos />} />
        <Route path="videos" element={<Videos />} />
        <Route path="contact" element={<Contact />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App;
