import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './landing_page/home/HomePage';
import SignUp from './landing_page/sign_up/signup';
import Product from './landing_page/products/ProductPage';
import About from './landing_page/about/AboutPage';
import Pricing from './landing_page/pricing/PricingPage';
import Support from './landing_page/support/SupportPage';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import NotFound from './landing_page/notFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar />
  <Routes>
    <Route path='/' element={<HomePage />} />
    <Route path='/signup' element={<SignUp />} />
    <Route path='/about' element={<About />} />
    <Route path='/product' element={<Product />} />
    <Route path='/pricing' element={<Pricing />} />
    <Route path='/support' element={<Support />} />
    <Route path='*' element={<NotFound />} />
  </Routes>
  <Footer />
  </BrowserRouter>
);
