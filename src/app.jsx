import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css";
import Navigation from './components/Navigation';
import ShoesSection from "./components/home";
import Shop from './components/pages/shop';
import Location from './components/pages/location';
import About from './components/pages/about';
import Contact from './components/pages/contact';
import Login from './components/pages/login';

const App = () => {
    return (
        <BrowserRouter>
            <Navigation />
            <Routes>
                <Route path='/' element={<ShoesSection />} />
                <Route path='/shop' element={<Shop />} />
                <Route path='/location' element={<Location />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/login' element={<Login/>} />
                <Route path='*' element={<h1>404 Not Found</h1>} />
            </Routes>
        </BrowserRouter>
    );
};

export default App; 