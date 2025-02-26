import React from 'react';

const HeroSection = () => {

    const styles = {
        background: `url(/bg-shop.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <section className='h-screen flex items-center justify-center' style={styles}>
            <div className='text-center text-white'>
                <h1 className='text-5xl font-bold mb-4'>Welcome to Our Store</h1>
                <p className='text-xl mb-8'>
                    Discover the best products for your home
                </p>
                <a 
                    href="#products"
                    className='bg-black text-white px-6 py-3 rounded-full text-xl hover:bg-[#9d7cff] transition duration-300 ease-in-out'
                >
                    Shop Now
                </a>
            </div>
        </section>
    );
};

export default HeroSection;