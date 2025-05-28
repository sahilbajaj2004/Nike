import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css";
import Navigation from './component/Navigation';
import ShoesSection from "./component/home";
import Shop from './component/pages/shop';
import Location from './component/pages/location';
import About from './component/pages/about';
import Contact from './component/pages/contact';
import Login from './component/pages/login';

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