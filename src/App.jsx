import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import ProductCatalog from './components/ProductCatalog';



const App = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <ProductCatalog />
            <Footer />
        </div>
    );
};

export default App;
